import React, { useContext } from "react";
import Header from "../components/Header";
import CategoriesSection from "../components/CategoriesSection";
import { staticContext } from "../contexts/StaticContext";
import TechPrudoctsContextProvider, {
  TechPrudoctsContext,
} from "../contexts/TechPrudoctsContext.jsx";

const TechContent = ({ techCategories }) => {
  const { prudocts } = useContext(TechPrudoctsContext) || { prudocts: [] };

  return (
    <div>
      <Header />
      <main className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold capitalize mb-4">Categories:</h1>
        <CategoriesSection data={techCategories} />
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          {prudocts && prudocts.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {prudocts.map((p) => (
                <div key={p.id} className="p-4 bg-white rounded shadow">
                  <img src={p.img} alt="" />
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <span>{p.price}</span>
                  <div>
                  <button>add </button>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No products available.</p>
          )}
        </div>
      </main>
    </div>
  );
};

const Tech = () => {
  const { techCategories } = useContext(staticContext);

  return (
    <TechPrudoctsContextProvider>
      <TechContent techCategories={techCategories} />
    </TechPrudoctsContextProvider>
  );
};

export default Tech;
