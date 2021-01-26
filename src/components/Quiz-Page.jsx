import "../App.css";
import Question from "./Question";

const QuizPage = ({ questions }) => {
  return (
    <section className="quiz-page">
      <div className="heading">
        <h1>Quiz Type</h1>
        <h3>Questions</h3>
        <h3>Question Number</h3>
      </div>
      <Question questions={questions} />
    </section>
  );
};
export default QuizPage;
