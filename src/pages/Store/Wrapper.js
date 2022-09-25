import React from "react";
import { Wrapper as Container } from "./StoreComponents.styled";
import PetCard from "../../components/PetCard";
import { petDeets } from "../../dummy";
import { Grid, List } from "../../components/icons";

const Wrapper = () => {
  return (
    <Container>
      <div className="header">
        <h2>Shop</h2>
        <span>Sort by: Popularity</span>
      </div>
      <div className="second-header">
        <p>{petDeets.length} products found</p>
        <div className="icons">
          <List />
          <Grid />
        </div>
      </div>
      <div className="grid">
        {petDeets.map((pet) => (
          <div className="grid-item" key={pet.id}>
            <PetCard breed={pet.breed} image={pet.img} price={pet.price} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <span>Previous</span>
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>Next</span>
      </div>
    </Container>
  );
};

export default Wrapper;
