import React from "react";
import { gql } from "@apollo/client";

// The Rick & Morty API can't handle Mutations (changes eg create/update/delete stuff)
// So we need to use another API

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
      }
    }
  }
`;

export default function Mutation() {
  return <div>Mutation</div>;
}
