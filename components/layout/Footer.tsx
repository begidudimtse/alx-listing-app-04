import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} StayFinder. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
