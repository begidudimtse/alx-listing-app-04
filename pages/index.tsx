import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import PropertyCard from "@/components/common/PropertyCard";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <Layout>
      <section className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.name} property={property} />
        ))}
      </section>
    </Layout>
  );
}
