import { useRoutes } from "react-router";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const element = useRoutes(publicRoutes);
  return element;
};
