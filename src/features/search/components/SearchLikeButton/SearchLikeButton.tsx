import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function LikeButton({
  liked,
  handleClick,
}: {
  liked: boolean;
  handleClick: (e: React.ChangeEvent<any>) => void;
}) {
  return (
    <Box
      onClick={handleClick}
      sx={{
        cursor: "pointer",
      }}
    >
      {liked ? (
        <Favorite color="success" fontSize="small" />
      ) : (
        <FavoriteBorderOutlined color="success" fontSize="small" />
      )}
    </Box>
  );
}
