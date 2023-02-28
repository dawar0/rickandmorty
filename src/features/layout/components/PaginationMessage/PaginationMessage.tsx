import { Typography } from "@mui/material";

export default function PaginationMessage({ message }: { message: string }) {
  return (
    <Typography
      variant="body2"
      sx={{ textAlign: "center", fontWeight: "bold", p: 2 }}
    >
      {message}
    </Typography>
  );
}
