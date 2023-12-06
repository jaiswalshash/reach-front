import React from "react";

function Input() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg dark:bg-slate-600 text-white">
      <label
        htmlFor="inputField"
        className="block text-sm font-medium text-gray-700 dark:text-white"
      >
        Input Field
      </label>
      <input
        type="text"
        id="inputField1"
        name="inputField1"
        className="mt-2 p-2 w-full border rounded-md text-black shadow-md"
      />
      <input
        type="text"
        id="inputField2"
        name="inputField2"
        className="mt-2 p-2 w-full border rounded-md text-black shadow-md"
      />
      <button className="border mt-4 p-2 bg-purple-400 rounded-lg shadow-lg text-white">
        Submit
      </button>
    </div>
  );
}

export default Input;
