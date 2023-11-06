import React, { useState, useEffect } from 'react';
import './LoadingBar.css';

const LoadingBar = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        return newProgress <= 100 ? newProgress : 100;
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="loading-container">
        <div className="loading-bar-container">
          <div
            className="loading-bar"
            style={{ width: `${loadingProgress}%` }}
            />
        </div>
      </div>
    </>
  );
};

export default LoadingBar;
