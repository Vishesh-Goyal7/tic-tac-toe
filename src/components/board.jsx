import React, { useState } from "react";
import Cell from "./cell";

const Board = () => {

    const [state, setState] = useState(Array(9).fill(null))

    const [isXturn, setisXturn] = useState(true)

    const [winner, setWinner] = useState(false)

    const clicker = (index) => {
        if(state[index] !== null){
            return 
        } else {
            let newState = [...state]
            newState[index] = isXturn ? "X" : "O"
            setState(newState)
            setisXturn(!isXturn)
            const boolean = winnerCheck(newState)
            if(boolean){
                setWinner(true)
            }
        }
    }

    const winnerCheck = (state) => {
        const logic = [
            [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
        ]

        for(let i of logic){
            const [x,y,z] = i
            if((state[x] === state[y]) && (state[y] === state[z]) && (state[x] !== null)){
                state[0] = state[x]
                return true
            }
        }
    }

    return (
        <div className="board">
            <h3>Player1 Begins with 'X'</h3>
            {winner ? <>
                <h2>Game Over!!! {state[0]} WON</h2>
            </> : <div className="grid">
                <div className="row">
                    <Cell value = {state[0]} onClick = {() => {clicker(0)}}/>
                    <Cell value = {state[1]} onClick = {() => {clicker(1)}}/>
                    <Cell value = {state[2]} onClick = {() => {clicker(2)}}/>
                </div>
                <div className="row">
                    <Cell value = {state[3]} onClick = {() => {clicker(3)}}/>
                    <Cell value = {state[4]} onClick = {() => {clicker(4)}}/>
                    <Cell value = {state[5]} onClick = {() => {clicker(5)}}/>
                </div>
                <div className="row">
                    <Cell value = {state[6]} onClick = {() => {clicker(6)}}/>
                    <Cell value = {state[7]} onClick = {() => {clicker(7)}}/>
                    <Cell value = {state[8]} onClick = {() => {clicker(8)}}/>
                </div>
            </div>}
        </div>
    )
}

export default Board