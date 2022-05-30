import React from "react";
import { Grid} from "@mui/material";
import styles from "./styles.module.css";

const Heading = () => {
  return (
      <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        backgroundColor: "#1D1D1D",
        color: "white",
        overflow: "hidden",
        minHeight:'220px'
      }}
    >
      <Grid item >
        <p className={styles.house}>
          Not only People <br></br> Need a house
        </p>
        <button className={styles.makeFriend}>Make a friend</button>
      </Grid>

      <img src='/images/dog.svg' style={{ maxWidth: "100%" }} className={styles.image} alt="" />
    </Grid>

    
  );
};

export default Heading;
