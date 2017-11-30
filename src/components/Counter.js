import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor}) => {
    const CounterCss = {
        width: "10rem",
        height: "10rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "1rem",
        color: "white",
        fontSize: "3rem",
        borderRadius: "100%",
        cursor: "pointer",
        userSelect: "none",
        transition: "background-color 0.75s",
        backgroundColor: color
    }
    console.log();
    return(
        <div style={ CounterCss } onClick={ onIncrement } onContextMenu={
            (e) => {
                e.preventDefault();
                onDecrement();
            }
        } onDoubleClick={ onSetColor }>{ number }</div>
    );
};

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    color: "black",
    onIncrement: () => {
        console.log("onIncrement is undefined");
    },
    onDecrement: () => {
        console.log("onDecrement is undefined");
    },
    onSetColor: () => {
        console.log("onSetColor is undefined");
    }
};

export default Counter;