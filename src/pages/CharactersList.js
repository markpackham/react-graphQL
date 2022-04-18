import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharactersList.css";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="CharactersList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
