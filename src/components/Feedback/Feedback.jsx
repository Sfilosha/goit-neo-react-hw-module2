import React from "react";
import css from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <>
      <div className={css.ratesWrapper}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <div>
        <p>Total: {total}</p>
        <p>Positive: {positive}%</p>
      </div>
    </>
  );
}

export default Feedback;
