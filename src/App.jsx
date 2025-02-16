import "./App.css";
import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [reviews, setReview] = useState(() => {
    // Check for PreviousData in LS
    const savedObject = window.localStorage.getItem("previousData");
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    // If no data use zeroes
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveRate = Math.round((reviews.good / totalFeedback) * 100);

  const updateFeedback = ({ target }) => {
    const feedbackType = target.name;
    return setReview({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    return setReview({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("previousData", JSON.stringify(reviews));
  }, [reviews]);

  return (
    <>
      <div className="cardTop">
        <Description />
        <Options
          // name={updateFeedback}
          onClick={updateFeedback}
          totalCount={totalFeedback}
          onReset={resetFeedback}
        />
      </div>
      <div className="cardBottom">
        {totalFeedback ? (
          <Feedback
            good={reviews.good}
            neutral={reviews.neutral}
            bad={reviews.bad}
            total={totalFeedback}
            positive={positiveRate}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
};

export default App;
