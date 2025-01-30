import React, { forwardRef } from "react";

// used forewardRef to pass ref to dialog element in ExperienceCard.jsx
const DialogBox = forwardRef(({ title, name, details, onClose }, ref) => {
  return (
    <dialog 
      ref={ref} 
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 border rounded-md w-96 bg-white"
    >
      <h2 className="text-xl font-bold text-center">{name}</h2>
      <p className="text-gray-600 text-center">{title}</p>
      <div className="mt-2">
        <h3 className="text-md font-semibold">Responsibilities:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <form method="dialog" className="mt-4 flex justify-center">
        <button 
          onClick={onClose} 
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Close
        </button>
      </form>
    </dialog>
  );
});

export default DialogBox;