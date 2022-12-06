import React from "react";
import "./App.css";
import { Box, Typography } from "@mui/material";

function App() {
  let obj = { name: "Olya", age: 24 };
  console.log(obj.name);

  return (
    <Box>
      <Typography sx={{ color: "red" }}>
        Hello React.js and TypeScript!
      </Typography>
    </Box>
  );
}

export default App;
