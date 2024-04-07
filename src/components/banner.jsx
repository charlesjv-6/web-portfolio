import React, { useState, useEffect } from "react";

export default function Banner({ imageArray }){
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [imageArray.length]);

  return (
    <div className="banner-container">
      {imageArray.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Banner ${index + 1}`}
          className={index === currentImageIndex ? "active" : ""}
        />
      ))}
    </div>
  );
};

