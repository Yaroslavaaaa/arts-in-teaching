import React from 'react';
import paintings from '../data/paintings.json';
import PaintingCard from '../components/PaintingCard';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="gallery-title">Приложение для авторской программы "Интеграция уроков образовательной области «Язык и литература» с дисциплинами искусствоведческого цикла"</h1>
      <div className="gallery">
        {paintings.map((painting) => (
          <PaintingCard key={painting.id} painting={painting} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
