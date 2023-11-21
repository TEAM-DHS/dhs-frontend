import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextInput() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mb: 1, width: "386px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="아이디"
        type="search"
        variant="standard"
      />
    </Box>
  );
}
