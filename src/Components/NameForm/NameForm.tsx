import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const h5Style = {
  margin: "15px 0px 0px 0px",
};

const buttonStyle = {
  margin: "20px 0px 0px 0px",
};

const paperStyle = {
  padding: 20,
  width: "280px",
  margin: "20px auto",
};

const iconStyle = { backgroundColor: "#1bbd7e" };

interface NameFormProps {
  onSubmit?: (value: string) => void;
}

interface NameFormState {
  name: string;
}

type AllPropsRequired<T> = {
  [Property in keyof T]-?: T[Property];
};

export class NameForm extends React.Component<NameFormProps, NameFormState> {
  private args: AllPropsRequired<NameFormProps> = {
    ...this.props,
    onSubmit:
      this.props.onSubmit !== undefined
        ? this.props.onSubmit
        : (value: string): void => {
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
    this.args.onSubmit(this.state.name);
  };

  render(): React.ReactNode {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid container direction={"column"} alignItems={"center"}>
              <Avatar style={iconStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5" style={h5Style}>
                Enter your name
              </Typography>
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
              style={buttonStyle}
              fullWidth
            >
              Sign in
            </Button>
          </Paper>
        </Grid>
      </form>
    );
  }
}
