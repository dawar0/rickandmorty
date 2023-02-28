import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters(
    $page: Int
    $name: String
    $status: String
    $species: String
    $type: String
    $gender: String
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        status: $status
        species: $species
        type: $type
        gender: $gender
      }
    ) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
        species
        episode {
          name
        }
        type
        gender

        location {
          name
        }
        origin {
          name
        }
      }
    }
  }
`;
