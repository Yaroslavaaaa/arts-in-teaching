import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import paintings from '../data/paintings.json';
import './PaintingDetails.css';

function PaintingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const painting = paintings.find((p) => p.id === parseInt(id));

  if (!painting) {
    return <h2 className="painting-not-found">Painting not found</h2>;
  }

  return (
    <div className="painting-details-container">
      <h1 className="painting-title">{painting.title}</h1>
      <p className="painting-artist"><strong>Художник:</strong> {painting.artist}</p>
      <img
        src={require(`../${painting.imagePath}`)}
        alt={painting.title}
        className="painting-image"
      />
      <p className="painting-description">
        <strong>О картине:</strong>{painting.description}
      </p>
      <p className="painting-about-artist">
        <strong>О художнике:</strong> {painting.aboutArtist}
      </p>
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}

export default PaintingDetails;
