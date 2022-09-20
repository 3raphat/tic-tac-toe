import React, { useState } from "react";
import Box from "./Box";
// import { FiX, FiCircle } from "react-icons/fi";

function Board() {
    const [box, setBox] = useState(Array(9).fill(null));
    const [X, setX] = useState(true);

    const winner = calcWinner(box);
    let status;
    if (winner) {
        return status = "Winner: " + winner;
    } else {
        status = "Player turn: " + (X ? 'X' : 'O')
    }

    const renderBox = (i) => {
        return (
            <Box value={box[i]} onClick={() => handleClick(i)} />
        )
    };

    const handleClick = (i) => {
        const boxes = box.slice();

        if (boxes[i] === null) {
            boxes[i] = X ? 'X' : 'O';
            setBox(boxes);
            setX(!X);
        } else {
            alert("Can't do that");
        }
    };

    function calcWinner(boxes) {
        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < win.length; i++) {
            const [a, b, c] = win[i];
            if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
                return boxes[a];
            }
        }
        return null;
    }

    return (
        <div className="board">
            <div className="board-row">
                {renderBox(0)}
                {renderBox(1)}
                {renderBox(2)}
            </div>
            <div className="board-row">
                {renderBox(3)}
                {renderBox(4)}
                {renderBox(5)}
            </div>
            <div className="board-row">
                {renderBox(6)}
                {renderBox(7)}
                {renderBox(8)}
            </div>
            <h3>{status}</h3>
        </div>
    );
}

export default Board;
