import React from "react";
import { Link } from "react-router-dom";
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
    <>
      <p>
        <a href="/search">Search</a>
      </p>
      <div className="CharactersList">
        {data.characters.results.map((character) => {
          return (
            <Link to={`/${character.id}`} key={character.id}>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
            </Link>
          );
        })}
      </div>
    </>
  );
}
