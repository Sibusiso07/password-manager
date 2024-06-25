from flask import Flask, request, jsonify
import psycopg2
from psycopg2 import sql

app = Flask(__name__)

# Database configuration
DB_HOST = "localhost"
DB_NAME = "your_database_name"
DB_USER = "your_database_user"
DB_PASSWORD = "your_database_password"


def get_db_connection():
    conn = psycopg2.connect(
        host=DB_HOST,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
    return conn


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data['username']
    password = data['password']

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT password FROM users WHERE username = %s", (username,))
    user = cur.fetchone()
    cur.close()
    conn.close()

    if user and user[0] == password:
        return jsonify({"message": "Login successful!"}), 200
    else:
        return jsonify({"message": "Invalid username or password!"}), 401


@app.route('/dashboard', methods=['GET'])
def dashboard():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM passwords")
    passwords = cur.fetchall()
    cur.close()
    conn.close()

    return jsonify(passwords), 200


@app.route('/addPassword', methods=['POST'])
def add_password():
    data = request.json
    username = data['username']
    password = data['password']

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO passwords (username, password) VALUES (%s, %s)", (username, password))
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({"message": "Password added successfully!"}), 201


@app.route('/editPassword', methods=['PUT'])
def edit_password():
    data = request.json
    password_id = data['id']
    new_data = data['data']

    conn = get_db_connection()
    cur = conn.cursor()
    query = sql.SQL("UPDATE passwords SET {field} = %s WHERE id = %s").format(
        field=sql.Identifier(list(new_data.keys())[0])
    )
    cur.execute(query, (list(new_data.values())[0], password_id))
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({"message": "Password updated successfully!"}), 200


@app.route('/delete', methods=['DELETE'])
def delete_password():
    data = request.json
    password_id = data['id']

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM passwords WHERE id = %s", (password_id,))
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({"message": "Password deleted successfully!"}), 200


if __name__ == '__main__':
    app.run(debug=True)
