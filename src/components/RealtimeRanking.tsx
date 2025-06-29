import { useState } from "react";
import { sortOptions } from "../constants/sortoptions";
import { tabs } from "../constants/tabs";

const RealtimeRanking = () => {
  const [activeTab, setActiveTab] = useState("전체");
  const [activeSort, setActiveSort] = useState("받고 싶어한");

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

        <div className="min-h-[100px] flex items-center justify-center text-gray-500 border border-dashed border-gray-300 rounded-lg p-4">
          현재 랭킹 정보가 없습니다.
        </div>
      </div>
    </section>
  );
};

export default RealtimeRanking;
