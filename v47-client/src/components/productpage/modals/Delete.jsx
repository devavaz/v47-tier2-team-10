import React from 'react';

export const Delete = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <p className="text-gray-700 text-lg mb-10 mx-20">Are you sure you want to delete?</p>
        <div className="flex justify-evenly">
          <button className="bg-red-500 text-white px-8 py- mr-2 rounded">Delete</button>
          <button className="bg-gray-300 text-gray-700 px-8 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};