import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        name
        image
        species
        id
      }
    }
  }
`;

const useCharacters = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  return {
    error,
    data,
    loading,
  };
};

export default useCharacters;
