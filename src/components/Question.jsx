import { useState } from "react";

const Question = ({ questions }) => {
  console.log("questions => ", questions);
  return (
    <>
      {questions.map((question) => (
        <p>{question.question}</p>
      ))}
    </>
  );
};
export default Question;
