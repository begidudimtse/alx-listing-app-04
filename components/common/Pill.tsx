import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 border rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition"
    >
      {label}
    </button>
  );
};

export default Pill;
