import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { PASSWORD_MISMATCH_ERROR } from "../../utils/constants/errorMessage";
import { useState, useEffect } from "react";

const PasswordReInput = ({
  rePassword,
  setRePassword,
  setIsValidRePassword,
  password,
}: PasswordReInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const validateRePassword = (password: any, rePassword: any) => {
    if (isFocused) {
      if (password !== rePassword) {
        return PASSWORD_MISMATCH_ERROR;
      }
      return true;
    }
  };

  let validationMessage = validateRePassword(password, rePassword);

  useEffect(() => {
    validateRePassword(password, rePassword) === true
      ? setIsValidRePassword(true)
      : setIsValidRePassword(false);
  }, [rePassword]);

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
        value={rePassword}
        onChange={e => setRePassword(e.target.value)}
        onFocus={() => setIsFocused(true)}
        error={isFocused && validationMessage !== true}
        helperText={validationMessage !== true && validationMessage}
      />
    </Box>
  );
};

export default PasswordReInput;
