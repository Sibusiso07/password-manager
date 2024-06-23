import pg from 'pg';
import express from 'express';
const router = express();

// Hook the db.
const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'password-manager-db',
    password: process.env.DB_PASSWORD,
    port: 5432
});

db.connect();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await db.query("SELECT * FROM users WHERE email = $1", [email]);
      const results = user.rows;
      if (user) {
        if (password === results[0].password) {
          console.log("Login Successful");
          res.status(200).json({ message: "Login Successful" });
        } else {
          console.log("Incorrect Password");
          res.status(401).json({ message: "Incorrect Password" });
        }
      } else {
        console.log("User does not exist");
        res.status(404).json({ message: "User does not exist" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
