import React from "react";
import { gql, useMutation } from "@apollo/client";

// The Rick & Morty API can't handle Mutations (changes eg create/update/delete stuff)
// So we need to use another API eg https://graphql-compose.herokuapp.com/northwind/

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
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: "hotdog",
        quantityPerUnit: 2,
      },
    }
  );
  return (
    <div>
      <button onClick={() => createProduct()}></button>
    </div>
  );
}
