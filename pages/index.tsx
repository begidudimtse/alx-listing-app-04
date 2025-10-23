import Layout from "@/components/layout/Layout";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";
import { HERO_BG, FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: `url(${HERO_BG.src})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">
          Find your favorite place here!
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="py-8 flex flex-wrap gap-3 justify-center">
        {FILTERS.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Listing Section */}
      <section className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, idx) => (
          <PropertyCard key={idx} property={property} />
        ))}
      </section>
    </Layout>
  );
};

export default Home;
