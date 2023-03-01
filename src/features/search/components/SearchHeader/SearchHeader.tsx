import {
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { RootState } from "../../../../store/store";
import { updateSearchInput } from "../../slices/searchInputSlice";
import { useEffect, useRef, useState } from "react";
import { Close } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import { RickAndMorty } from "../../../../assets/Rick_and_morty";
export default function Header() {
  const search = useSelector((state: RootState) => state.searchInput.value);
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const dispatch = useDispatch();
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(updateSearchInput(e.target.value));
  }

  useEffect(() => {
    searchInputRef.current?.focus();
  }, [openSearch]);

  const searchInputRef = useRef<HTMLInputElement>();

  const matches = useMediaQuery("(min-width:650px)");

  function handleSearchClose() {
    setOpenSearch(false);
  }
  function handleSearchOpen() {
    setOpenSearch(true);
  }

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        top: 0,
        background: "rgba(26, 26, 26, 0.7)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        WebkitBackdropFilter: "blur(10px)",
        zIndex: 100,
        marginBottom: 20,
        height: !matches ? 100 : 50,
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {(!openSearch || matches) && (
          <h1
            style={{
              width: 200,
              height: !matches ? 100 : 50,
            }}
          >
            <RickAndMorty width={"100%"} height={"100%"} />
          </h1>
        )}
        <AnimatePresence>
          <motion.div
            style={{
              display: "flex",
              justifyContent: "end",
              maxWidth: matches ? 300 : "100%",
            }}
            initial={{
              width: 0,
            }}
            animate={{
              width: "100%",
            }}
          >
            {matches || openSearch ? (
              <OutlinedInput
                inputRef={searchInputRef}
                placeholder={"Search your favorite character"}
                sx={{
                  borderRadius: 10,
                }}
                onChange={onChange}
                value={search}
                endAdornment={
                  !matches && (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleSearchClose}
                        aria-label="Toggle search box visibility"
                      >
                        <Close />
                      </IconButton>
                    </InputAdornment>
                  )
                }
                fullWidth
              />
            ) : (
              <IconButton onClick={handleSearchOpen}>
                <SearchIcon fontSize="large" />
              </IconButton>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </nav>
  );
}
