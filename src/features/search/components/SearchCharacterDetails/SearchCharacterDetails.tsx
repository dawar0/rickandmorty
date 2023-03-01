import { useDispatch, useSelector } from "react-redux";
import { Character } from "../../type";
import { RootState } from "../../../../store/store";
import { updateIsSelected } from "../../slices/searchInputSlice";

import {
  Button,
  Card,
  Dialog,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import LikeButton from "../SearchLikeButton/SearchLikeButton";

export default function SearchCharacterDetails({
  character,
}: {
  character: Character;
}) {
  const dispatch = useDispatch();
  const { favoriteCharacters } = useSelector(
    (state: RootState) => state.favoriteCharacters
  );

  const handleClose = () => {
    dispatch(updateIsSelected(null));
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const handleLike = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    dispatch({
      type: "favoriteCharacters/toggleFavoriteCharacter",
      payload: character,
    });
  };

  return (
    <Dialog open={!!character} onClose={handleClose} fullWidth>
      <Card
        sx={{
          display: "flex",
          flexDirection: matches ? "row" : "column",
          overflow: "scroll",
          textTransform: "capitalize",
        }}
      >
        <img
          src={character?.image}
          alt={character?.name}
          title={character?.name}
          aria-label={character?.name}
          style={{
            width: !matches ? "100%" : "50%",
            height: !matches ? "auto" : "100%",
          }}
        />
        <Box
          sx={{
            padding: 2,
            width: !matches ? "calc(100% - 4)" : "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pb: 2,
              }}
            >
              <Typography variant="h5">{character?.name}</Typography>
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
                justifyContent: "space-between",
                pb: 2,
              }}
            >
              <Box>
                <Typography variant="body1">{character?.species}</Typography>
                <Typography variant="body2">{character?.gender}</Typography>
              </Box>
              <Typography
                variant="body1"
                color={
                  character?.status === "Alive" ? "success.main" : "error.main"
                }
              >
                {character?.status}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Last known location:
            </Typography>
            <Typography variant="body2">{character?.location.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              First seen in:
            </Typography>
            <Typography variant="body2">
              {character?.episode[0].name}
            </Typography>
            {character?.type && (
              <Typography variant="body2" color="text.secondary">
                Type:
              </Typography>
            )}
            <Typography variant="body1">{character?.type}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={handleClose} aria-label="close dialog">
              Close
            </Button>
          </Box>
        </Box>
      </Card>
    </Dialog>
  );
}
