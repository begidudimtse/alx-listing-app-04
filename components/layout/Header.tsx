import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">StayFinder</div>

      {/* Search bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search for villas, apartments, mansions..."
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Auth buttons */}
      <div className="space-x-4">
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">Sign In</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Sign Up</button>
      </div>

      {/* Accommodation Types */}
      <nav className="ml-8 hidden md:flex space-x-4 text-gray-600">
        <a href="#">Rooms</a>
        <a href="#">Mansions</a>
        <a href="#">Countryside</a>
        <a href="#">Beachfront</a>
      </nav>
    </header>
  );
};

export default Header;
