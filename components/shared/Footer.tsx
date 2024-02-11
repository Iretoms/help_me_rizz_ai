import React from 'react'

const Footer = () => {
  return (
  <footer className="bg-blueGrey py-4">
      <div className="flex flex-col items-center justify-center">
        {/* App Name */}
        <div className="text-xl font-bold mb-2">Help My Rizz</div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-gray-300 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm2.646 6.354a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L12 11.293l2.646-2.645z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          {/* Add other social media links similarly */}
        </div>

        {/* Footer Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-white">Privacy Policy</a>
          <a href="#" className="text-white hover:text-white">Terms of Service</a>
          <a href="#" className="text-white hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer