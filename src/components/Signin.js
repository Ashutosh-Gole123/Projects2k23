import React from "react";
import "./css/Signin.css";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GoogleIcon from "@mui/icons-material/Google";
import img from "../image/image1.jpg";

import {
  Button,
  Divider,
  InputAdornment,
  TextField,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import LeftIn from "./Animation/LeftIn";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Signin() {
  const handleClick = () => {
    try {
      signInWithPopup(auth, provider)
        .then((data) => {
          sessionStorage.setItem("email", data.user.email);
          sessionStorage.setItem("photoURL", data.user.photoURL);
          window.location.reload();
        })
        .catch((error) => {
          // Handle errors from the signInWithPopup function
          console.error("Error signing in with popup:", error);
          // You can add appropriate error handling or show error messages to the user
        });
    } catch (error) {
      // Handle any synchronous errors here (unlikely in this case, as the function is asynchronous)
      console.error("Error occurred:", error);
    }
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    "&:hover": {
      backgroundColor: grey[100],
    },
  }));
  const CustomGoogleIcon = styled(GoogleIcon)({
    color: "#3366AA",
    marginRight: "10px",
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <LeftIn>
          <section
            className="hero"
            style={{ backgroundImage: `url('${img}')` }}
          >
            <div className="content">
              <div className="box">
                <TextField
                  className="text"
                  id="outlined-basic"
                  required
                  name="name"
                  placeholder="Username"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className="text"
                  id="outlined-basic"
                  required
                  name="email"
                  placeholder="Email"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  className="button"
                  variant="contained"
                  size="large"
                  fullWidth
                  color="primary"
                >
                  Login In
                </Button>
                <Divider
                  style={{
                    backdropFilter: "inherit",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  OR
                </Divider>

                <ColorButton
                  className="button"
                  variant="contained"
                  size="large"
                  fullWidth
                  color="primary"
                  onClick={handleClick}
                >
                  <CustomGoogleIcon /> Sign Up
                </ColorButton>
              </div>
            </div>
          </section>
        </LeftIn>
      </ThemeProvider>
    </>
  );
}

export default Signin;
