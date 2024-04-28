import React, { useState } from "react";
import "./gameStyle.css";

const choices = ["rock", "paper", "scissors"];

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [computerImage, setComputerImage] = useState("");

  const handleClick = (choice) => {
    setUserChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerChoice);
    showWinner(choice, computerChoice);
    if (computerChoice === "rock") {
      setComputerImage(
        "https://i.pinimg.com/236x/91/d1/38/91d138b2728e673eb7aa3ca68367357c.jpg"
      );
    } else if (computerChoice === "paper") {
      setComputerImage(
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-U9Y29gf-d4T0EbDkbxIlIu6czMCkNqgJPGsxTy8xwPXLcb2z"
      );
    } else {
      setComputerImage(
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxe3VcpkZcSaIbeBa1mA3AwZaQ_UjmZQKQQT2DxkDxX_Sdut67"
      );
    }
  };

  const showWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a tie!");
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  };

  return (
    <div className="game_box">
      <h1>Rock Paper Scissors</h1>
      <div className="game_btns">
        <button onClick={() => handleClick("rock")}>Rock</button>
        <button onClick={() => handleClick("paper")}>Paper</button>
        <button onClick={() => handleClick("scissors")}>Scissors</button>
      </div>
      {userChoice && computerChoice && result && (
        <div className="game_text">
          <p>Your choice: {userChoice}</p>
          {/* <p>Computer's choice: {computerChoice}</p> */}
          <p>Result: {result}</p>
        </div>
      )}
      {computerImage && (
        <div>
          <p>Computer's choice:</p>
          <img src={computerImage} alt="Computer's choice" />
        </div>
      )}
    </div>
  );
};

export default Game;
