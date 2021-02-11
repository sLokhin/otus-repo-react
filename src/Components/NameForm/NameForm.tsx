import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Button,
  TextField,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        margin: "20px 0px 0px 0px",
      },
    },
  },
});

const paperStyle = {
  padding: 20,
  width: "280px",
  margin: "20px auto",
};

const iconStyle = { backgroundColor: "#1bbd7e" };

interface INameFormProps {
  onSubmit: (value: string) => void;
}

interface INameFormState {
  name: string;
}

export class NameForm extends React.Component<INameFormProps, INameFormState> {
  static defaultProps: INameFormProps = {
    onSubmit: (value: string): void => {
      console.log("The name was written and accepted:  ", value);
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
        <form onSubmit={this.handleFormSubmit}>
          <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Grid container direction={"column"} alignItems={"center"}>
                <Avatar style={iconStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                <h2>Enter your name</h2>
              </Grid>
              <TextField
                label={"Player name"}
                placeholder={"Player1"}
                inputProps={{ maxLength: 12 }}
                fullWidth
                required
                onChange={this.handleInputChange}
              ></TextField>
              <Button
                variant={"contained"}
                type={"submit"}
                color={"primary"}
                fullWidth
              >
                Sign in
              </Button>
            </Paper>
          </Grid>
        </form>
      </ThemeProvider>
    );
  }
}
