import React from 'react';
import './Alert.css';

const Alert = (props) => {

    const classes = 'alert-wrapper ' + props.className;

    return (
        <div className={classes}>
            <p><b>{props.boldMsg}</b> {props.message}</p>
        </div>
    )
}

export default Alert