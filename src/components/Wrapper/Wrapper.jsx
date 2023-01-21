import React from "react";
import { Box, Wrap } from "./WrapperElements";
import Card from "../Card/Card";
import FeedbackStats from "../Stats/FeedbackStats";
import FeedbacksList from "../FeedbacksList/FeedbacksList";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

const Wrapper = ({ feedbacks, handleDelete }) => {
  return (
    <Box>
      <Wrap>
        <FeedbackForm />
        <FeedbackStats stats={feedbacks} />
        <FeedbacksList feedbacks={feedbacks} handleDelete={handleDelete} />
      </Wrap>
    </Box>
  );
};

export default Wrapper;
