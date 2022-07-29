import type { NextPage } from "next";
import {
  Button,
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { quotes } from "../data/dg_quotes";

const Home = () => {
  const [count, setCount] = useState<number>(0);

  const getRandomArbitrary = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            DG Quotes Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <Box justifyItems={"center"}>
        <Stack spacing={2} alignItems={"center"}>
          <Box sx={{ pt: 10, pb: 5 }}>
            <Typography variant="h5" align="center" sx={{ pb: 3 }}>
              Quote No.{count + 1}
            </Typography>
            <Typography align="center">{quotes[count]}</Typography>
          </Box>
          <Button
            size="small"
            variant="contained"
            sx={{ p: 3 }}
            onClick={() => {
              setCount(Math.floor(getRandomArbitrary(0, quotes.length)));
            }}
          >
            Generate new quote
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
