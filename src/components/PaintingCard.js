import React from 'react';
import { Link } from 'react-router-dom';
import './PaintingCard.css'; // Подключаем стили

function PaintingCard({ painting }) {
  return (
    <div className="card">
      <h3 className="card-title">{painting.id}. {painting.title}</h3>
      <p className="card-artist">{painting.artist}</p>
      <Link to={`/painting/${painting.id}`} className="card-link">
        Подробнее
      </Link>
    </div>
  );
}

export default PaintingCard;
