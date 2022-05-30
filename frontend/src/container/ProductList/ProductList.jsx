import * as React from "react";

import { Grid, Box, Typography } from "@mui/material";
import styles from "../ProductList/styles.module.css";
import Pet from "../Pet";
import pets from "../../pets";

export default function ProductList() {
  return (
    <div className={styles.card}>
      <Box flexGrow={2}>
        <Typography
          variant="h3"
          sx={{ marginTop: "10px" }}
          align="center"
          component="div"
        >
          Our Friends who <br /> are looking for house 
        </Typography>

        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ justifyContent: "space-evenly", paddingTop: "60px" }}
        >
          {pets.map((pet) => (
            <Pet pet={pet} />
          ))}
        </Grid>
      </Box>
    </div>
  );
}
