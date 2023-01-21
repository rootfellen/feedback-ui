import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import { useState } from "react";
import feedbackData from "./data/feedbacks";
function App() {
  const [feedbacks, setFeedbacks] = useState(feedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };
  return (
    <div className="container">
      <Header />
      <Wrapper feedbacks={feedbacks} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;
