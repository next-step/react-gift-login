import { useState, useEffect } from "react"; // useEffect 훅 임포트
import { sortOptions } from "../constants/sortoptions";
import { tabs } from "../constants/tabs";
import ProductCard from "../components/ProductCard";

import { productListData } from "../data/productListData";
import type { Product } from "../types/product";

const RealtimeRanking = () => {
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab ? savedTab : "전체";
  });

  const [activeSort, setActiveSort] = useState(() => {
    const savedSort = localStorage.getItem("activeSort");
    return savedSort ? savedSort : "받고 싶어한";
  });

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]); // activeTab이 변경될 때만 실행

  useEffect(() => {
    localStorage.setItem("activeSort", activeSort);
  }, [activeSort]);

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        실시간 급상승 선물 랭킹
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                ${
                  activeTab === tab
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex justify-end items-center space-x-2 text-sm text-gray-600 mb-4">
          {sortOptions.map((option, index) => (
            <span
              key={option}
              className={`cursor-pointer ${
                activeSort === option
                  ? "font-bold text-gray-900"
                  : "text-gray-600"
              } hover:text-gray-800`}
              onClick={() => setActiveSort(option)}
            >
              {option}
              {index < sortOptions.length - 1 && (
                <span className="ml-2 text-gray-400">|</span>
              )}
            </span>
          ))}
        </div>

        <section className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productListData.map((product: Product, index: number) => (
              <ProductCard
                key={product.id}
                product={product}
                rank={index + 1}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default RealtimeRanking;
