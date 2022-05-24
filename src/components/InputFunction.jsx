import React, { useState } from "react";
import Input from "./Input";

let count = 0;
let tic = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let flag = false;
const InputFunction = ({ inputCount, index, updateResult }) => {
  const [input, setInput] = useState("");
  const [ide, setId] = useState();
 

  let checkWinner = () => {
    count++;
    for (let i = 0; i < 3; i++) {
      if (tic[i][0] === "X" && tic[i][1] === "X" && tic[i][2] === "X") {
        return "X is winner";
      }
      if (tic[i][0] === "O" && tic[i][1] === "O" && tic[i][2] === "O") {
        return "O is winner";
      }
      if (tic[0][i] === "X" && tic[1][i] === "X" && tic[2][i] === "X") {
        return "X is winner";
      }
      if (tic[0][i] === "O" && tic[1][i] === "O" && tic[2][i] === "O") {
        return "O is winner";
      }
    }
    if (tic[0][0] === "O" && tic[1][1] === "O" && tic[2][2] === "O") {
      return "O is winner";
    }
    if (tic[0][0] === "X" && tic[1][1] === "X" && tic[2][2] === "X") {
      return "X is winner";
    }
    if (tic[2][0] === "O" && tic[1][1] === "O" && tic[0][2] === "O") {
      return "O is winner";
    }
    if (tic[2][0] === "X" && tic[1][1] === "X" && tic[0][2] === "X") {
      return "X is winner";
    }
    return "";
  };
  let fillArray = (e, sign) => {
    if (e > 2 && e < 6) {
      tic[1][e - 3] = sign;
    } else if (e > 5 && e < 9) {
      tic[2][e - 6] = sign;
    } else {
      tic[0][e] = sign;
    }
  };
  let setValue = (e) => {
    e = Number(e);

    if (!flag) {
      flag = true;
      setInput("X");
      setId(e);
      fillArray(e, "X");
      let x = checkWinner();
      if (x === "" && count === 9) {
        updateResult("Draw!");
     
      } else if (x !== "") {
        updateResult(x);
        setId(index);
       
      }
    } else {
      flag = false;
      setInput("O");
      setId(e);
      fillArray(e, "O");
      let x = checkWinner();
      if (x === "" && count === 9) {
        updateResult("Draw!");
      } else if (x !== "") {
        updateResult(x);
        setId(index);
      }
    }
  };

  return (
    <>
      <Input
        inputCount={inputCount}
        index={index}
        setValue={setValue}
        ide={ide}
        input={input}
        checkWinner={checkWinner}
      />
    </>
  );
};

export default InputFunction;
