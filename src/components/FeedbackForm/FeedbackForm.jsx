import React from "react";
import { Form, Title, InputGroup, Input } from "./FeedbackFormElements";
import Button from "../Button/Button";

const FeedbackForm = () => {
  return (
    <>
      <Form>
        <Title>How would you rate your service with us?</Title>
        {/* @todo - rating select component */}
        <InputGroup>
          <Input type="text" placeholder="Write a review" />
          <Button type="submit">Submit</Button>
        </InputGroup>
      </Form>
    </>
  );
};

export default FeedbackForm;
