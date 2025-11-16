

import React from "react";

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image?: string;
  // Add any other fields your API returns
}

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  if (!property) {
    return <p>No property details available.</p>;
  }

  return (
    <div className="property-detail">

      {property.image && (
        <img
          src={property.image}
          alt={property.title}
          className="property-image"
        />
      )}

      <h1>{property.title}</h1>

      <p><strong>Price:</strong> ${property.price}</p>

      <p><strong>Location:</strong> {property.location}</p>

      <p>{property.description}</p>

    </div>
  );
}
