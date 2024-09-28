import React from "react";

const Result = ({ score, total, restartQuiz }) => {
  const message =
    score > total / 2
      ? "Gratulálunk, jól teljesítettél!"
      : "Köszönjük, hogy részt vettél!";

  return (
    <div>
      <h1>
        Az eredményed: {score}/{total}
      </h1>
      <p>{message}</p>
      <button onClick={restartQuiz}>Újrakezdés</button>
    </div>
  );
};

export default Result;
