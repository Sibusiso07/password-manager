"use client"

import { useState } from "react";

export default function Home() {
  // States.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle the login button
  const handleLogin = () => {

  }

  return (
    <div className="relative h-screen w-screen bg-[url('/password.jpg')] bg-cover bg-no-repeat">
      <div className="flex justify-center items-center h-full">
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-screen-md rounded-md w-full">
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
