import React from "react";

function CartButton({ itemCount, onClick }) {
  return (
    <button
      className="flex items-center bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      onClick={onClick}
    >
      <svg
        className="h-6 w-6 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 21H21V7H9zm0 0L5 7H3V5h14v2h-2l-4 14zm7-11a2 2 0 100-4 2 2 0 000 4z"
        ></path>
      </svg>
      <span className="text-sm">{itemCount}</span>
    </button>
  );
}

export default CartButton;
