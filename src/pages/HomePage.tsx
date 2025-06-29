import GiftThemes from "../components/GiftThemes";
import RealtimeRanking from "../components/RealtimeRanking";
import ProductCard from "../components/ProductCard";
import SelectFriends from "../components/SelectFriends";
import Entertainment from "../components/EnterTainment";

import { productListData } from "../data/productListData";
import type { Product } from "../types/product";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <SelectFriends />

      <GiftThemes />

      <Entertainment />

      <RealtimeRanking />

      <section className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productListData.map((product: Product, index: number) => (
            <ProductCard key={product.id} product={product} rank={index + 1} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
