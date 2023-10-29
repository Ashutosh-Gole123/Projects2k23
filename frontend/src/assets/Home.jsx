// import React from 'react'

import { Button, Typography } from "@mui/material";
import Header from "./Header";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Reveal } from "./animates/Reveal";
import img from "./images/img.jpg";
function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#CCDAE0", height: "100vh" }}>
        <Header />
        <div
          style={{
            margin: "0 20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "80vh",
          }}
        >
          <div
            style={{
              margin: "0 20px",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: "80vh",
            }}
          >
            <Reveal>
              <Typography component="h2" variant="h4">
                Welcome to the world of learning! Here you can find a variety of
              </Typography>
            </Reveal>
            <Reveal>
              <Button
                variant="contained"
                color="success"
                type="file"
                endIcon={<ArrowCircleRightIcon />}
              >
                Upload photo
              </Button>
            </Reveal>
          </div>
          <img src={img} alt="" style={{ maxWidth: "100%" }} />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#CCDAE0"
          fill-opacity="1"
          d="M0,160L48,149.3C96,139,192,117,288,96C384,75,480,53,576,58.7C672,64,768,96,864,106.7C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Home;
