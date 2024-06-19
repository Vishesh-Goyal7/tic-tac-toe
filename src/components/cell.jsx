import React from "react";

const Cell = (props) => {
    return (
        <div className="cell" onClick = {props.onClick}>
            <h5>{props.value}</h5>
        </div>
    )
}

export default Cell