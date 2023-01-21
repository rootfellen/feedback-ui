import React from "react";
import PropTypes from "prop-types";
import { Container, Rating, Button } from "./CardElements";
import { FaTimes } from "react-icons/fa";

const Card = ({ item, handleDelete }) => {
  return (
    <Container>
      <Rating>{item.rating}</Rating>
      <Button onClick={() => handleDelete(item.id)}>
        <FaTimes color="#3b1676" />
      </Button>
      {item.text}
    </Container>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
