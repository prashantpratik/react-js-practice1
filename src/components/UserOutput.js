import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (<div className="UserOutput">
        <p>UserName: {props.username}</p>
        <p>Paragraph2</p>
    </div>);
};

export default userOutput;