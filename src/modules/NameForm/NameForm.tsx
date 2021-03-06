import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  Paper,
  Avatar,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import { LOGIN_ATTEMPT } from "./reducer";
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
  onSubmit?: (name: string) => void;
}

export const NameForm: FC<NameFormProps> = (props: NameFormProps) => {
  const [nameFromState, setName] = useState("");
  const dispatch = useDispatch();
  const {
    onSubmit = (name: string): void => {
      dispatch({ type: LOGIN_ATTEMPT, payload: { name } });
    },
  } = props;

  const handleInputChange = (e: React.ChangeEvent): void => {
    setName((e.target as HTMLInputElement).value);
  };

  const handleFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSubmit(nameFromState);
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
            onChange={handleInputChange}
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
};
