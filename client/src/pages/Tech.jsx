import Header from "../components/Header";
import CategoriesSection from "../components/CategoriesSection";
import { use } from "react";
import { staticContext } from "../contexts/StaticContext";
const Tech = () => {
  const { techCategories } = use(staticContext);
  return (
    <div>
      <Header />
      <main>
        <h1 className="text-2xl font-bold capitalize">Categories:</h1>
        <CategoriesSection data={techCategories} />
      </main>
    </div>
  );
};

export default Tech;
