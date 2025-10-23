import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
      <img
        src={property.image}
        alt={property.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.name}</h3>
        <p className="text-gray-600 text-sm">
          {property.address.city}, {property.address.country}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-blue-600 font-bold">${property.price}/night</span>
          <span className="text-yellow-500 font-semibold">⭐ {property.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
