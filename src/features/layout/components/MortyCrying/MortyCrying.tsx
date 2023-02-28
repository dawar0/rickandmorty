import { Grid, Typography } from "@mui/material";
import Lottie from "lottie-react";
import morty_error from "../../../../assets/morty_error.json";
export default function MortyCrying({ message }: { message: string }) {
  return (
    <Grid
      xs={12}
      item
      sx={{ display: "grid", placeItems: "center" }}
      aria-label="error"
    >
      <Lottie
        animationData={morty_error}
        loop
        style={{
          width: 300,
        }}
      />
      <Typography variant="h4">{message}</Typography>
    </Grid>
  );
}
