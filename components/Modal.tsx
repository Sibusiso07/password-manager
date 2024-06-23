// Modal.tsx

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  password: { name: string; pass_word: string } | null; // Assuming this structure based on your table data
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, password }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex">
      <div className="relative p-8 bg-gray-800 w-full max-w-md m-auto flex-col flex rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Password Details</h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            <span className="font-bold text-white">Website: </span>
            {password?.name}
          </p>
          <p className="text-lg">
            <span className="font-bold text-white">Password: </span>
            {password?.pass_word}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
