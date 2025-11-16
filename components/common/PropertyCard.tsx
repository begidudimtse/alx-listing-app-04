// components/common/PropertyCard.tsx
import React from "react";
import { PropertyProps } from "@/interfaces";

interface Props {
  property: PropertyProps;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{property.name}</h2>
        <p className="text-sm text-gray-500">
          {property.address.city}, {property.address.state}, {property.address.country}
        </p>
        <p className="mt-2 font-semibold">${property.price}</p>
        <div className="mt-2 flex gap-2">
          {property.category.map((cat) => (
            <span
              key={cat}
              className="text-xs bg-gray-200 rounded-full px-2 py-1"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="mt-2 text-sm text-gray-600">
           {property.offers.bed} |  {property.offers.shower} |  {property.offers.occupants}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
