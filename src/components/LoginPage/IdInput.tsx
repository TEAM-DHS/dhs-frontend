import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LENGTH_ERROR, TYPE_ERROR } from "../../utils/constants/errorMessage";
import { useState, useEffect } from "react";

const IdInput = ({ id, setId, setIsValidId }: IdInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const validateId = (id: any) => {
    if (isFocused) {
      if (id.length < 4) {
        return LENGTH_ERROR;
      } else if (!isNaN(id)) {
        return TYPE_ERROR;
      }
      return true;
    }
  };

  let validationMessage = validateId(id);

  useEffect(() => {
    validateId(id) === true ? setIsValidId(true) : setIsValidId(false);
  }, [id]);

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
        value={id}
        onChange={e => setId(e.target.value)}
        onFocus={() => setIsFocused(true)}
        error={isFocused && validationMessage !== true}
        helperText={validationMessage !== true && validationMessage}
      />
    </Box>
  );
};

export default IdInput;
