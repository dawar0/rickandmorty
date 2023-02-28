import { Box, CircularProgress, useMediaQuery } from "@mui/material";

export default function Spinner() {
  const matches = useMediaQuery("(min-width:650px)");

  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        width: !matches ? "calc(100% - 2)" : "100%",
        p: 2,
      }}
      aria-label="loading"
    >
      <CircularProgress />
    </Box>
  );
}
