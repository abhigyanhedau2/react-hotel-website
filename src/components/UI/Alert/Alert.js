import React from 'react';
import './Alert.css';

const Alert = (props) => {

    const specifiedClasses = props.className === undefined ? '' : props.className;

    return (
        <div className={'alert-wrapper ' + specifiedClasses + props.mode}>
            <p><b>{props.boldMsg}</b> {props.message}</p>
        </div>
    )
}

export default Alert