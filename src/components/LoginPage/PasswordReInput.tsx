import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function PasswordReInput() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mb: 1, mt: 1, width: "386px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-password-input"
        label="비밀번호 재입력"
        type="password"
        variant="standard"
      />
    </Box>
  );
}
