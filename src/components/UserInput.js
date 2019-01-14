import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        width: "200px",
        border: "2px solid blue",
        fontSize: "20px"
    }
    return (
        <input type="text" 
        onChange={props.handler} 
        value={props.uName}
        style={inputStyle}
        />
    );
};

export default userInput;