import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./CharactersList.css";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export default function CharactersList() {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  //console.log({ error, loading, data });

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
