import { useLazyQuery } from "@apollo/client";
import { useDeferredValue, useEffect } from "react";
import { Filters } from "../type";
import { GET_CHARACTERS } from "./Queries";

export default function useCharacters({
  search,
  selectedFilters,
  setShowFavorites,
}: {
  search: string;
  selectedFilters: Filters;
  setShowFavorites: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const deferredSearch = useDeferredValue(search);

  const [GetCharacters, { data, loading, error, fetchMore }] =
    useLazyQuery(GET_CHARACTERS);

  const getMoreCharacters = () => {
    fetchMore({
      variables: {
        page: data.characters.info.next,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          characters: {
            info: fetchMoreResult.characters.info,
            results: [
              ...prev.characters.results,
              ...fetchMoreResult.characters.results,
            ],
          },
        });
      },
    });
  };

  useEffect(() => {
    GetCharacters({
      variables: {
        name: deferredSearch,
        status: selectedFilters.status,
        species: selectedFilters.species,
        gender: selectedFilters.gender,
      },
    });

    setShowFavorites(false);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [deferredSearch, selectedFilters, GetCharacters, setShowFavorites]);
  return { data, loading, error, getMoreCharacters };
}
