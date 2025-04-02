// SkeletonLoader.js
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonLoader() {
  return (
    <div className="skeleton-loader">
      <Skeleton height={300} width="100%" />
      <h1 className="skeleton-title">
        <Skeleton height={40} width={200} />
      </h1>
      <div className="skeleton-content">
        <Skeleton count={5} />
      </div>
    </div>
  );
}
