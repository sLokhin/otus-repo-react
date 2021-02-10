import React, { FC } from "react";
import styled from "@emotion/styled";
import {
  Divider,
  Button,
  Typography,
  TextField,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

const NameFormWrapper = styled.div`
  width: 300px;
  background-color: gainsboro;
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: auto;
  text-align: center;
  border: 2px solid black;
`;

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h5: {
        display: "inline-block",
        margin: "20px 0px 20px 0px",
      },
    },
    MuiTextField: {
      root: {
        display: "flex",
        width: "250px",
        margin: "20px auto 20px auto",
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: "white",
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: "12px 14px",
      },
    },
    MuiButton: {
      root: {
        height: 40,
        padding: "0 25px",
        margin: "0px 0px 20px 0px",
      },
    },
  },
});

interface INameFormProps {
  onSubmit?: (value?: string) => void;
}

const defaultProps: INameFormProps = {
  onSubmit: (): void => {
    console.log("The name was written and accepted");
  },
};

export const NameForm: FC<INameFormProps> = (props = defaultProps) => {
  const onSubmitForm = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  const changeValue = (e: React.ChangeEvent): void => {
    console.log("change value");
  };
  return (
    <ThemeProvider theme={theme}>
      <NameFormWrapper>
        <Typography variant="h5">Enter your name</Typography>
        <Divider />
        <TextField
          placeholder={"Player1"}
          inputProps={{ maxlength: 10 }}
          variant="outlined"
          onChange={changeValue}
        ></TextField>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </NameFormWrapper>
    </ThemeProvider>
  );
};

NameForm.defaultProps = defaultProps;
