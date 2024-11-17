import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Card";

const Gadgets = () => {
  const allGadgets = useLoaderData();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGadgets =
    selectedCategory === "All"
      ? allGadgets
      : allGadgets.filter((gadget) => gadget.category === selectedCategory);

  const categories = [
    { name: "All Product", value: "All" },
    { name: "Phones", value: "Smartphones" },
    { name: "Laptops", value: "Laptops" },
    { name: "Smart Watches", value: "Smartwatches" },
    { name: "Accessories", value: "Accessories" },
  ];

  return (
    <section className="mt-5">
      <h2 className="md:text-4xl text-3xl mb-5 mb:mb-10 font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-2/12 w-7/12 mx-auto space-y-4">
          {categories.map((category) => (
            <Link
              to={`/category/${category.value}`}
              key={category.value}
              className={`btn w-full rounded-lg ${
                selectedCategory === category.value
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-6 w-10/12 mx-auto gap-3">
          {filteredGadgets.length > 0 ? (
            filteredGadgets.map((gadget, idx) => (
              <Card key={idx} gadget={gadget} />
            ))
          ) : (
            <div className="col-span-full text-center font-bold text-xl">
              No products available in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gadgets;
