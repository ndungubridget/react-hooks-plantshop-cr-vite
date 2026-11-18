import React from "react";

function PlantCard({ plant, onStockChange }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      {plant.inStock !== false ? (
        <button
          className="primary"
          onClick={() => onStockChange(plant.id)}
        >
          In Stock
        </button>
      ) : (
        <button disabled>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;