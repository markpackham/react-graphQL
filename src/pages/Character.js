import React from "react";
import { useCharacter } from "../hooks/useCharacter";

export default function Character() {
  const { data, loading, error } = useCharacter();

  return <div>Character</div>;
}
