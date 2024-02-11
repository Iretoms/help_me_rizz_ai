import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full py-4 px-6">
      {/* Logo */}
      <div className="text-xl font-bold">Help My Rizz</div>

      {/* Signup Button */}
      <button className="bg-coral hover:bg-coral-dark text-white font-bold py-2 px-4 rounded-full shadow-md">
        Sign Up
      </button>
    </div>
  );
}

export default Header