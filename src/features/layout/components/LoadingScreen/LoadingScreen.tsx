import { Box, Container } from "@mui/material";
import Lottie from "lottie-react";
import morty_loading from "../../../../assets/morty_loading.json";
export default function SearchLoading() {
  return (
    <Container>
      <Box
        sx={{ display: "grid", placeItems: "center", height: "90vh" }}
        aria-label="loading"
      >
        <Lottie animationData={morty_loading} loop />
      </Box>
    </Container>
  );
}
