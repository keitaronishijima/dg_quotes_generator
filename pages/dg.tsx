import type { NextPage } from "next";
import { Button, Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";

const quotes = [
  "Who's gonna carry the boats and the logs?",
  "I'm back mother fucker!",
  "Merry Christmas!",
  "You don't know me son!"
]


const Home = () => {
  const [count, setCount] = useState<number>(0);

  const getRandomArbitrary = (min: number, max:number): number => {
    return Math.random() * (max - min) + min;
  }

  return (
    <div>
      <Box justifyItems={"center"}>
        <Stack spacing={2} justifyItems={"center"}>
          <Button variant="contained" sx={{ m: 5 }} onClick={() => {setCount(Math.floor(getRandomArbitrary(0, 4)))}}>
            Click Me!
          </Button>
          <Typography align="center">Quote No.{count+1}</Typography>
          <Typography align="center">{quotes[count]}</Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
