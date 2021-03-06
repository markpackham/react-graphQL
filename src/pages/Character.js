import React from "react";
import "./Character.css";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router";

export default function Character() {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <p>
        <a href="/">Home</a>
      </p>
      <div className="Character">
        <img
          src={data.character.image}
          alt={data.character.name}
          width={750}
          height={750}
        />
        <div className="Character-content">
          <h1>{data.character.name}</h1>
          <p>{data.character.gender}</p>
          <div className="Character-episode">
            {data.character.episode.map((episode) => {
              return (
                <div key={episode.id}>
                  {episode.name} - <b>{episode.episode}</b>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
