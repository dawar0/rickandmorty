import React from "react";
import {
  Button,
  FormControlLabel,
  List,
  ListItem,
  ListSubheader,
  Popover,
  Radio,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { clearFilters, updateFilters } from "../../slices/searchInputSlice";
import plumbus from "../../../../assets/plumbus.png";

export default function FilterMenu() {
  const filters = {
    status: ["Alive", "Dead", "unknown"],
    species: [
      "Human",
      "Alien",
      "Humanoid",
      "Mytholog",
      "Poopybutthole",
      "Animal",
      "Robot",
      "Cronenberg",
      "Disease",
      "Parasite",
      "Vampire",
      "unknown",
    ],
    gender: ["female", "male", "genderless", "unknown"],
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch();
  const { selectedFilters } = useSelector(
    (state: RootState) => state.searchInput
  );
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <img
          alt="Rick and Morty"
          src={plumbus}
          width={60}
          height={60}
          title="Filter"
          aria-label="Filter"
          onClick={handleClick}
        />
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            pt: 1,
          }}
        >
          Filter
        </Typography>
      </Box>
      <Popover
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        sx={{
          maxHeight: "500px",
        }}
      >
        <List
          sx={{
            p: 2,
          }}
        >
          <ListItem>
            <Button
              color="success"
              onClick={() => {
                dispatch(clearFilters());
                handleClose();
              }}
              fullWidth
            >
              Clear Filters
            </Button>
          </ListItem>
          {Object.keys(filters).map((filter) => (
            <React.Component key={filter}>
              <li>
                <ListSubheader
                  sx={{
                    borderRadius: 2,
                    top: 10,
                    textTransform: "capitalize",
                  }}
                >
                  {filter}
                </ListSubheader>
                {(filters as any)[filter].map((item: any) => (
                  <ListItem key={item + " " + filter}>
                    <FormControlLabel
                      control={
                        <Radio
                          checked={(selectedFilters as any)[filter] === item}
                          name={filter}
                          value={item}
                          color="success"
                          onChange={(e) => {
                            dispatch(
                              updateFilters({
                                ...selectedFilters,
                                [filter]: e.target.value,
                              })
                            );

                            handleClose();
                          }}
                        />
                      }
                      sx={{
                        textTransform: "capitalize",
                      }}
                      label={item}
                    />
                  </ListItem>
                ))}
              </li>
            </React.Component>
          ))}
        </List>
      </Popover>
    </>
  );
}
