"use client" 

import { useEffect, useState } from "react"; // Importing necessary modules from React for handling state and side effects.
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Importing table components from a custom module.
import axios from "axios"; // Importing axios for making HTTP requests.

export default function Passwords() {
  //States.
  const [passwords, setPasswords] = useState<any[] | null>(null);

  // Rendering the passwords
  useEffect(() => {
    fetchPasswords();
  }, []);

  // Fetch the passwords
  const fetchPasswords = async () => {
    try {
      
    } catch (err) {
      console.error("Error fetching passwords: ", err);
    };
  }

  // Adding new password
  const handleAddPassword = async () => {

  }

  // Delete password
  const handleDeletePassword = async () => {
    
  }

  return (
    <div className="flex flex-col items-center h-screen py-10 shadow-xl bg-gray-950">
      <h1 className="text-4xl font-bold mb-4 text-white">Passwords</h1>
      <div className="w-3/5">
          <Table className="w-full my-10">
            <TableCaption className="text-lg mb-2">
              A list of your passwords
            </TableCaption>
            <TableHeader>
              <TableRow className="bg-white text-gray-900">
                <TableHead className="text-center">Name</TableHead>
                <TableHead className="text-center">Password</TableHead>
                <TableHead className="text-center">Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.isArray(passwords) && passwords.map((password) => (
                <TableRow key={password.id} className="hover:bg-gray-200">
                  <TableCell>{password.name}</TableCell>
                  <TableCell>{password.pass_word}</TableCell>
                  <TableCell>
                    <button
                    className="bg-red-500 text-white py-1.5 px-2.5 rounded-md mt-2 hover:bg-red-600" 
                    // onClick={() => handleDeletePassword(password)}
                    >
                    Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-sky-900" 
        onClick={handleAddPassword}>
          Add Password
        </button>
    </div>
  )
}