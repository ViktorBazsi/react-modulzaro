import React from "react";

const ProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
  const progressPercentage =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div
      style={{ width: "100%", backgroundColor: "#f3f3f3", borderRadius: "5px" }}
    >
      <div
        style={{
          width: `${progressPercentage}%`,
          height: "20px",
          backgroundColor: "#4caf50",
          borderRadius: "5px",
        }}
      />
      <p>
        {currentQuestionIndex + 1}/{totalQuestions}
      </p>
    </div>
  );
};

export default ProgressBar;
