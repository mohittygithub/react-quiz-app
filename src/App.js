import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import QuizPage from "./components/Quiz-Page";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuestions = async () => {
    let items = await axios(
      `https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean`
    );
    setQuestions(items.data.results);
    console.log(questions);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <>
      <Header />
      <QuizPage questions={questions} />
    </>
  );
};
export default App;
