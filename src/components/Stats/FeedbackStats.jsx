import React from "react";
import { Container } from "./FeedbackStatsElements";
import PropTypes from "prop-types";

const FeedbackStats = ({ stats }) => {
  let average = stats.reduce((acc, cur) => acc + cur.rating, 0) / stats.length;
  let output = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <Container>
      <div>{stats.length} Reviews</div>
      <div>Average rating: {isNaN(output) ? 0 : output}</div>
    </Container>
  );
};

FeedbackStats.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default FeedbackStats;
