import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./login.module.css";

export default function Login(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          margin: "0 auto",
          width: "25ch",
          display: "flex",
          justifyContent: "center",
        },
      }}
      className={styles.form}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField id="filled-basic" label="Password" variant="filled" />
      <Button variant="contained" onClick={() => props.setIsLoggedIn(true)}>
        Login
      </Button>
    </Box>
  );
}
