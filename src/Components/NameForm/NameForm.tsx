import React from "react";
import styled from "@emotion/styled";
import {
  Divider,
  Button,
  Typography,
  TextField,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

const NameFormWrapper = styled.form`
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
  onSubmit: (value: string) => void;
}

interface INameFormState {
  name: string;
}

export class NameForm extends React.Component<INameFormProps, INameFormState> {
  static defaultProps: INameFormProps = {
    onSubmit: (value: string): void => {
      if (value.length > 0) {
        console.log("The name was written and accepted:  ", value);
      } else {
        console.log("INVALID NAME");
      }
    },
  };

  state = {
    name: "",
  };

  handleInputChange = (e: React.ChangeEvent): void => {
    this.setState({
      name: (e.target as HTMLInputElement).value,
    });
  };

  handleFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
  };

  render(): React.ReactNode {
    return (
      <ThemeProvider theme={theme}>
        <NameFormWrapper onSubmit={this.handleFormSubmit}>
          <Typography variant="h5">Enter your name</Typography>
          <Divider />
          <TextField
            placeholder={"Player1"}
            inputProps={{ maxLength: 12 }}
            variant="outlined"
            helperText="*Required"
            onChange={this.handleInputChange}
          ></TextField>
          <Button variant="contained" type="submit" color="primary">
            Submit
          </Button>
        </NameFormWrapper>
      </ThemeProvider>
    );
  }
}
