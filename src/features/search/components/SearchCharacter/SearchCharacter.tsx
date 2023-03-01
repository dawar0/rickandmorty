import { Box, Card, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { Character } from "../../type";
import { updateIsSelected } from "../../slices/searchInputSlice";
import { motion } from "framer-motion";
import LikeButton from "../SearchLikeButton/SearchLikeButton";

export default function SearchCharacter({
  character,
}: {
  character: Character;
}) {
  const dispatch = useDispatch();

  const { favoriteCharacters } = useSelector(
    (state: RootState) => state.favoriteCharacters
  );

  const handleLike = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    dispatch({
      type: "favoriteCharacters/toggleFavoriteCharacter",
      payload: character,
    });
  };
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      component={motion.div}
      key={character.id}
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => dispatch(updateIsSelected(character))}
    >
      <Card
        component={motion.div}
        sx={{
          backgroundImage: `url(${character.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 300,
          display: "flex",
          flexDirection: "column",
          textTransform: "capitalize",
          justifyContent: "flex-end",
          cursor: "pointer",
        }}
      >
        <Box
          component={motion.div}
          sx={{
            height: "30%",
            backgroundColor: "background.paper",
            padding: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pb: 1,
              px: 1,
            }}
          >
            <Typography variant="h6">{character.name}</Typography>
            <LikeButton
              liked={
                !!favoriteCharacters.find(
                  (favoriteCharacter) => favoriteCharacter.id === character.id
                )
              }
              handleClick={handleLike}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                px: 1,
                color: "text.secondary",
              }}
              variant="body1"
            >
              {character.species}
            </Typography>
            <Typography
              sx={{
                px: 1,
                color:
                  character.status === "Alive" ? "success.main" : "error.main",
              }}
              variant="body2"
            >
              {character.status}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}
