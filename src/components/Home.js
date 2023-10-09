import React from "react";
import "./css/Home.css";
import { Card, CardMedia, Typography } from "@mui/material";
import img from "../image/image2.jpg";
import LeftIn from "./Animation/LeftIn";
import RightIn from "./Animation/RightIn";
function Home() {
  return (
    <div className="home">
      <div className="main">
        {" "}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Card sx={{ maxWidth: 450, borderRadius: "50%" }}>
            <LeftIn>
              <CardMedia component="img" image={img} />
            </LeftIn>
          </Card>
          <LeftIn>
            <Typography>Hello My Name is Ashugole</Typography>
          </LeftIn>
        </div>
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <RightIn>
            {" "}
            <Typography>Hello My Name is Ashugole</Typography>
          </RightIn>
          <Card sx={{ maxWidth: 450, borderRadius: "50%" }}>
            <RightIn>
              <CardMedia component="img" image={img} />
            </RightIn>
          </Card>
        </div>
        {/* <motion.div
          variants={{
            hidden: { opacity: 0, x: 65 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </motion.div> */}
      </div>
    </div>
  );
}

export default Home;
