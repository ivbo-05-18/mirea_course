import React from "react";

const CORRECT = {
  fontSize: "16px",
  padding: "10px",
  margin: "10px",
  color: "#C9F76F"
};

const WRONG = {
  fontSize: "16px",
  padding: "10px",
  margin: "10px",
  color: "#FF7373"
}

const Result = (props) => {
  return (
    <div style={props.correct === 1 ? CORRECT : WRONG}>
      {props.correct === 1 ? "Верно!" : "Неверно!"}
    </div>
  );
};

export default Result;
