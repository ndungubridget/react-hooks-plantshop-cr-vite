import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({
  plants,
  onAddPlant,
  onStockChange,
  searchTerm,
  onSearchChange,
}) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />

      <Search
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
      />

      <PlantList
        plants={plants}
        onStockChange={onStockChange}
      />
    </main>
  );
}

export default PlantPage;