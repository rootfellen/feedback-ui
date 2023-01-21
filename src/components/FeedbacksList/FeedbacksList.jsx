import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";

const FeedbacksList = ({ feedbacks, handleDelete }) => {
  if (!feedbacks || feedbacks.length === 0) {
    return <p style={{ textAlign: "center" }}>No feedbacks yet</p>;
  }
  return (
    <>
      {feedbacks.map((item) => (
        <Card key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </>
  );
};

FeedbacksList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbacksList;
