import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import Rating from "@mui/material/Rating";
// import Rating from "../container/Rating/Rating";
import pets from "../pets";

const PetScreen = () => {
  const { id } = useParams();
  const pet = pets.find((p) => p._id === id);
  return (
    <div className="container">
      <Link className="btn btn-primary my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={pet.images} alt={pet.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{pet.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <Rating value={pet.rating}/>
                {`${pet.numReviews} reviews`}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>Price:${pet.price}</ListGroup.Item>
            <ListGroup.Item>Description:{pet.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${pet.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              {/* Status */}
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{pet.countInStock > 0 ? "In Stock" : "Out of Sock"}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroupItem>
                <Button
                  className="btn btn-block"
                  type="button"
                  disabled={pet.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PetScreen;
