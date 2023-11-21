import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  PASSWORD_LENGTH_ERROR,
  TYPE_ERROR,
} from "../../utils/constants/errorMessage";
import { useState, useEffect } from "react";

type PasswordInputProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setIsValidPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  setPassword,
  setIsValidPassword,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const validatePassword = (password: any) => {
    if (isFocused) {
      if (password.length < 6) {
        return PASSWORD_LENGTH_ERROR;
      } else if (!isNaN(password)) {
        return TYPE_ERROR;
      }
      return true;
    }
  };

  let validationMessage = validatePassword(password);

  useEffect(() => {
    validatePassword(password) === true
      ? setIsValidPassword(true)
      : setIsValidPassword(false);
  }, [password]);

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
        onFocus={() => setIsFocused(true)}
        error={isFocused && validationMessage !== true}
        helperText={validationMessage !== true && validationMessage}
      />
    </Box>
  );
};

export default PasswordInput;
