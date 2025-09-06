//import from react
import React from "react";

// Example props: loading (bool), children (button text)
function LoadingButton({ loading, children, type, BtnText, ...props }) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center px-4 py-3 w-full rounded-lg mt-4 mb-5 bg-blue-600  text-white font-semibold shadow  ${
        loading ? "cursor-progress" : ""
      }`}
      disabled={loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 mr-2 text-white"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-20"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-60"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      {loading ? BtnText : children}
    </button>
  );
}

export default LoadingButton;
