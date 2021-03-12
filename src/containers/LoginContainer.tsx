import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { setLoginSuccess } from "../services/slices/user";
import { useDispatch } from "react-redux";
import LoginEmailAddress from "../components/login/LoginEmailAddress";
import LoginPassword from "../components/login/LoginPassword";
import LogInNewPassword from "../components/login/LoginNewPassword";
import LogInNewPasswordConfirmation from "../components/login/LoginNewPasswordConfirmation";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  spacer: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export enum FormState {
  EmailAddress,
  Password,
  NewPassword,
  ConfirmNewPassword,
}

interface LoginContainerProps {
  initialState: FormState;
}

export default function LogInContainer({ initialState }: LoginContainerProps) {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [formState, setFormState] = useState(initialState);

  const [logInEmailAddress, setLoginEmailAddress] = useState("");

  function onContinue(emailAddress: string) {
    console.log("LoginContainer onContinue");

    setLoginEmailAddress(emailAddress);
    setFormState(FormState.Password);
  }

  function onChangeAccount() {
    setFormState(FormState.EmailAddress);
  }

  function onLogin(password: string) {
    console.log("LoginContainer onLogin");

    if (logInEmailAddress === "b@unai.com") {
      setFormState(FormState.NewPassword);
    } else {
      dispatch(setLoginSuccess(logInEmailAddress));
    }
  }

  function onUpdatePassword(password: string) {
    setFormState(FormState.ConfirmNewPassword);
  }

  function onGoToHomePage() {
    dispatch(setLoginSuccess(logInEmailAddress));
  }

  console.log("LoginContainer FormSate=" + formState);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          color="primary"
          className={classes.spacer}
        >
          Login to Ruleau
        </Typography>
        {formState === FormState.EmailAddress && (
          <LoginEmailAddress onContinue={onContinue} />
        )}
        {formState === FormState.Password && (
          <LoginPassword
            emailAddress={logInEmailAddress}
            onChangeAccount={onChangeAccount}
            onLogin={onLogin}
          />
        )}
        {formState === FormState.NewPassword && (
          <LogInNewPassword onUpdatePassword={onUpdatePassword} />
        )}
        {formState === FormState.ConfirmNewPassword && (
          <LogInNewPasswordConfirmation onGoToHomePage={onGoToHomePage} />
        )}
      </div>
    </Container>
  );
}
