import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate900 py-4 w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="text-xl font-bold mb-2 text-textGray">Help My Rizz</div>
    

        {/* Footer Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-white hover:text-white">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer