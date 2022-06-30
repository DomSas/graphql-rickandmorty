import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
    name
    gender
    image
  }
  }
`;


const useCharacter = (id: any) => {
    const { error, data, loading } = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    });

    return {
        error,
        data,
        loading,
    };
}

export default useCharacter;