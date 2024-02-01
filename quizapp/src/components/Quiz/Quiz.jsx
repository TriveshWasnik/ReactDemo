import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";

function Quiz() {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);

  let option_array = [option1, option2, option3];

  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  function checkAnswer(e, ans) {
    if (!lock) {
      question.ans === ans
        ? (e.target.classList.add("correct"), setScore((prev) => prev + 1))
        : (e.target.classList.add("wrong"),
          option_array[question.ans - 1].current.classList.add("correct"));
      setLock(true);
    }
  }

  function nextQuestion() {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((opt) => {
        opt.current.classList.remove("wrong");
        opt.current.classList.remove("correct");
        return null;
      });
    }
  }

  function resetQuiz() {
    setIndex(0);
    setQuestion(data[index]);
    setLock(false);
    setScore(0);
    setResult(false);
  }

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />

      {!result ? (
        <>
          <h2>
            {index + 1}. {question.question}?
          </h2>
          <ul>
            <li onClick={(e) => checkAnswer(e, 1)} ref={option1}>
              {question.option1}
            </li>
            <li onClick={(e) => checkAnswer(e, 2)} ref={option2}>
              {question.option2}
            </li>
            {question.option3 ? (
              <li onClick={(e) => checkAnswer(e, 3)} ref={option3}>
                {question.option3}
              </li>
            ) : (
              ""
            )}
          </ul>
          <button onClick={() => nextQuestion()}>Next</button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      ) : (
        <>
          <h2>
            You Scored {score} out of {data.length}
          </h2>
          <button onClick={() => resetQuiz()}>Reset</button>
        </>
      )}
    </div>
  );
}

export default Quiz;
