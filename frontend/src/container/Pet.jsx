import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Grid} from '@mui/material';
import { Link } from "react-router-dom";
// import Rating from "./Rating/Rating";
import Rating from '@mui/material/Rating';

const Pet = ({ pet }) => {
  return (
    <Card
      key={pet._id}
      sx={{ maxWidth: 300 }}
      style={{
        marginBottom: "30px",
        borderRadius: "20px",
        marginLeft: "20px",
      }}
    >
      <Link to={`/pet/${pet._id}`} style={{textDecoration:'none',color:'black'}}>
        <CardMedia
          style={{ borderRadius: "20px", width: "280px" }}
          component="img"
          image={pet.images}
          alt="Dog"
        />

        <Typography
          align="center"
          gutterBottom
          style={{ fontSize: "25px", fontWeight: "600" }}
        >
          {pet.name}
        </Typography>
      </Link>
      <CardActions>
        <Grid align="center">
          <Button
            style={{ backgroundColor: "black", color: "white" }}
            size="small"
          >
            Add to Cart
          </Button>
          <Button size="small" style={{ color: "black", marginRight: "-35px" }}>
            <FavoriteIcon />
          </Button>
          <br />
          <Rating value={pet.rating}  />
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Pet;
