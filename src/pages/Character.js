import React from "react";
import { useCharacter } from "../hooks/useCharacter";

export default function Character() {
  const { data, loading, error } = useCharacter(2);

  console.log(error, loading, data);

  return <div className="Character">Character</div>;
}
