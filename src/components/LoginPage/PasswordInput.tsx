import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type PasswordInputProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  setPassword,
}) => {
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
        label="비밀번호"
        type="password"
        variant="standard"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </Box>
  );
};

export default PasswordInput;
