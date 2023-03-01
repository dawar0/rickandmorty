import { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

import { AnimatePresence } from "framer-motion";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

import SearchCharacter from "../SearchCharacter/SearchCharacter";
import SearchCharacterDetails from "../SearchCharacterDetails/SearchCharacterDetails";
import FilterMenu from "../SearchMenu/SearchMenu";
import MortyIcon from "./MortyIcon";
import SummerIcon from "./SummerIcon";
import Spinner from "../../../layout/components/PaginationSpinner/PaginationSpinner";
import SearchLoading from "../../../layout/components/LoadingScreen/LoadingScreen";
import PaginationMessage from "../../../layout/components/PaginationMessage/PaginationMessage";
import MortyCrying from "../../../layout/components/MortyCrying/MortyCrying";

import useCharacters from "../../api/useCharacters";

export default function SearchCharacterList() {
  const {
    value: search,
    isSelected,
    selectedFilters,
  } = useSelector((state: RootState) => state.searchInput);

  const { favoriteCharacters } = useSelector(
    (state: RootState) => state.favoriteCharacters
  );
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const toggleFavorites = () => setShowFavorites((prev: boolean) => !prev);

  const { loading, error, data, getMoreCharacters } = useCharacters({
    search,
    selectedFilters,
    setShowFavorites,
  });

  if (loading) return <SearchLoading />;
  if (error) return <MortyCrying message="Something went wrong" />;

  return (
    <InfiniteScroll
      dataLength={
        !showFavorites
          ? data?.characters.results.length || 0
          : favoriteCharacters.length || 0
      }
      next={getMoreCharacters}
      hasMore={showFavorites ? false : data?.characters.info.next !== null}
      loader={<Spinner />}
      endMessage={<PaginationMessage message={"Yay! You have seen it all."} />}
    >
      <Container
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              onClick={toggleFavorites}
              sx={{
                cursor: "pointer",
              }}
              aria-label="toggle favorites"
            >
              {showFavorites ? (
                <SummerIcon
                  height={!matches ? 60 : 50}
                  width={!matches ? 60 : 50}
                />
              ) : (
                <MortyIcon
                  height={!matches ? 60 : 50}
                  width={!matches ? 60 : 50}
                />
              )}
            </Box>
            <FilterMenu />
          </Grid>
          <AnimatePresence>
            {showFavorites ? (
              favoriteCharacters.length > 0 ? (
                favoriteCharacters.map((character: any) => (
                  <SearchCharacter key={character.id} character={character} />
                ))
              ) : (
                <MortyCrying message={"No favorites yet"} />
              )
            ) : data?.characters.results.length > 0 ? (
              data?.characters.results.map((character: any) => (
                <SearchCharacter key={character.id} character={character} />
              ))
            ) : (
              <MortyCrying message={"No results found"} />
            )}
          </AnimatePresence>
        </Grid>
        {isSelected && <SearchCharacterDetails character={isSelected} />}
      </Container>
    </InfiniteScroll>
  );
}
