"use client"

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  // Router Hook.
  const router = useRouter();

  // States.
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');

  // Handle the login button
  const handleLogin = async () => {
    try {
      // Send a POST request to the server with user credentials.
      // const response = await axios.post('/api/login', {
      //   username: username,
      //   password: password,
      // });
      // If login is successful, redirect the user to the Dashboard.
      // if (response.status === 200 && response.data.message === "Login Successful") {
        router.push('/Dashboard')
      // } else {
        // If login fails, show an alert with the error message.
        // alert(response.data.message);
      // }
    } catch (error) {
      // Log any errors that occur during login.
      console.error('Error during login:', error);
    }
  }

  return (
    <div className="relative h-screen w-screen bg-[url('/password.jpg')] bg-cover bg-no-repeat">
      <div className="flex justify-center items-center h-full">
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 w-[35%] rounded-md">
          <h2 className="text-white text-4xl mb-6 font-semibold text-center">Sign in</h2>
          <div className="flex flex-col gap-4">
            <input 
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              className="block bg-neutral-700 text-white rounded-md px-6 py-2 w-full focus:ring-0 focus:outline-none"
            />
            <input 
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block bg-neutral-700 text-white rounded-md px-6 py-2 w-full focus:ring-0 focus:outline-none"
            />
          </div>
          <button 
            onClick={handleLogin}
            className="block bg-blue-700 text-center text-white rounded-md mt-10 px-6 py-2 w-full focus:ring-0 focus:outline-none"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
