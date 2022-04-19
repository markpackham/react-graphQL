import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");

  // "called" could be added to our object if we wanted
  const [getLocations, { loading, error, data }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <div>
      <p>
        <a href="/">Home</a>
      </p>
      <p>Search for name eg "Beth Smith" to get their locations</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return (
              <li key={character.location.name}>{character.location.name}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
