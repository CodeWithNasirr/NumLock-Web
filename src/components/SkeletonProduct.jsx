import React from 'react';

const SkeletonProduct = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-48 rounded-md"></div>
      <div className="mt-2 bg-gray-200 h-4 rounded"></div>
      <div className="mt-1 bg-gray-200 h-4 rounded w-3/4"></div>
    </div>
  );
};

export default SkeletonProduct;