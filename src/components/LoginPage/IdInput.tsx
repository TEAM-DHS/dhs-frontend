import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LENGTH_ERROR, TYPE_ERROR } from "../../utils/constants/errorMessage";
import { useState } from "react";

type IdInputProps = {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
};

const IdInput: React.FC<IdInputProps> = ({ id, setId }) => {
  const [isFocused, setIsFocused] = useState(false);

  const validateId = (id: any) => {
    if (isFocused) {
      if (id.length < 4) {
        return LENGTH_ERROR;
      } else if (!isNaN(id)) {
        return TYPE_ERROR;
      }
    }
    return true;
  };
  const validationMessage = validateId(id);

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
        error={validationMessage !== true}
        helperText={validationMessage !== true && validationMessage}
      />
    </Box>
  );
};

export default IdInput;
