import React from "react";
import { Card, Button } from "react-bootstrap";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const MovieCard = ({ ahmed }) => {
  return (
    <div className="movie">
      <Card style={{ width: "18rem", height:"43rem" }}>
        <Card.Img className="image"  variant="top" src={ahmed.posterURL} />
        <Card.Body>
          <Card.Title className="titre"> {ahmed.title} </Card.Title>
          <Card.Text className="description"> {`${ahmed.description.substring(0,180)}...`} </Card.Text>
          <div>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating name="read-only" value={ahmed.rating} readOnly />
            </Box>
          </div>
          <Link to ={`/details/${ahmed.id}`}>               <Button variant="primary">details</Button>              </Link>  
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
