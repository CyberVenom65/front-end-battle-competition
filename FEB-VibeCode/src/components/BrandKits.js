import React from 'react';

const BrandKits = () => {
  return (
    <div
      className="rounded-[20px] border border-transparent p-[2px] flex items-center justify-center hover:from-[#6151f4] hover:to-[#00bfa6] transition-all duration-300 ease-in-out"
    >
      <div className="bg-[#1a1a1a] rounded-[20px] p-6 w-[320px]">
        <h2 className="text-white text-xl font-semibold mb-6">Brand Kits</h2>

        {/* Item 1 */}
        <label className="flex items-center justify-between bg-[#222222] rounded-lg p-4 mb-4 cursor-pointer">
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="w-6 h-6 rounded-sm border-gray-700 bg-[#222222] cursor-pointer"
            />
            <div className="relative w-8 h-8">
              <img
                src="https://placehold.co/20x20/ffffff/ffffff.png"
                alt="White circle overlapping white circle representing brand icon"
                className="rounded-full absolute bottom-3 right-2"
                width="20"
                height="20"
              />
              <img
                src="https://placehold.co/20x20/00bfa6/00bfa6.png"
                alt="Teal circle representing brand icon"
                className="rounded-full absolute top-3 left-0"
                width="20"
                height="20"
              />
              <img
                src="https://placehold.co/20x20/ffffff/ffffff.png"
                alt="White circle overlapping white circle representing brand icon"
                className="rounded-full absolute top-3 left-3"
                width="20"
                height="20"
              />
            </div>
            <span className="text-white font-semibold text-base">ECorp</span>
          </div>
          <i className="fas fa-sliders-h text-gray-400 text-lg"></i>
        </label>

        {/* Item 2 */}
        <label className="flex items-center justify-between bg-[#222222] rounded-lg p-4 mb-4 cursor-pointer">
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="w-6 h-6 rounded-sm border-gray-700 bg-[#222222] cursor-pointer"
            />
            <div className="relative w-8 h-8">
              <img
                src="https://placehold.co/24x24/ffffff/ffffff.png"
                alt="White circle overlapping white circle representing brand icon"
                className="rounded-full absolute bottom-3 right-2"
                width="20"
                height="20"
              />
              <img
                src="https://placehold.co/24x24/f5a623/f5a623.png"
                alt="White circle representing brand icon"
                className="rounded-full absolute top-3 left-0"
                width="20"
                height="20"
              />
              <img
                src="https://placehold.co/24x24/ffffff/ffffff.png"
                alt="White circle overlapping white circle representing brand icon"
                className="rounded-full absolute top-3 left-3"
                width="20"
                height="20"
              />
            </div>
            <span className="text-white font-semibold text-base">ICorp</span>
          </div>
          <i className="fas fa-sliders-h text-gray-400 text-lg"></i>
        </label>

        {/* Item 3 */}
        <label className="flex items-center justify-between bg-[#222222] rounded-lg p-4 cursor-pointer ">
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="w-6 h-6 rounded-sm bg-[#6151f4] border-transparent cursor-pointer text-white"
            />
            <div className="relative w-8 h-8">
              <img
                src="https://placehold.co/20x20/ffffff/ffffff.png"
                alt="White circle overlapping white circle representing brand icon"
                className="rounded-full absolute bottom-3 right-2"
                width="20"
                height="20"
              />
              <img
                src="https://placehold.co/20x20/ff3b3b/ff3b3b.png"
                alt="Red circle representing brand icon"
                className="rounded-full absolute top-3 left-0"
                width="20"
                height="20"
              />
              <img
                src="https://placehold.co/20x20/ffffff/ffffff.png"
                alt="White circle overlapping white circle representing brand icon"
                className="rounded-full absolute top-3 left-3"
                width="20"
                height="20"
              />
            </div>
            <span className="text-white font-semibold text-base">The Agency</span>
          </div>
          <i className="fas fa-sliders-h text-gray-400 text-lg"></i>
        </label>
      </div>
    </div>
  );
};

export default BrandKits;
