"use client" 

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import Modal from "@/components/Modal";

export default function Passwords() {
  const [passwords, setPasswords] = useState<any[] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPassword, setSelectedPassword] = useState<{
    name: string;
    pass_word: string;
  } | null>(null);

  useEffect(() => {
    fetchPasswords();
  }, []);

  const fetchPasswords = async () => {
    try {
      const response = await axios.get(""); // Replace with your API endpoint
      setPasswords(response.data);
    } catch (err) {
      console.error("Error fetching passwords: ", err);
    }
  };

  const handleView = (password: { name: string; pass_word: string }) => {
    setSelectedPassword(password);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPassword(null);
  };  

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
              <TableHead className="text-center">Website</TableHead>
              <TableHead className="text-center">Password</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(passwords) &&
              passwords.map((password) => (
                <TableRow key={password.id} className="hover:bg-gray-200">
                  <TableCell>{password.name}</TableCell>
                  <TableCell>{password.pass_word}</TableCell>
                  <TableCell>
                    <button
                      className="bg-sky-800 text-white py-1.5 px-2.5 rounded-md mt-2 hover:bg-sky-950"
                      onClick={() => handleView(password)} // Pass password data to handleView
                    >
                      View
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex gap-5">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-900">
          Add Password
        </button>
      </div>

      {/* Modal component */}
      <Modal isOpen={showModal} onClose={handleCloseModal} password={selectedPassword} />
    </div>
  );
}