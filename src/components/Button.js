import React from 'react';
import PropTypes from 'prop-types';

const Buttons = {
    display: "table",
    tableLayout: "fixed",
    width: "100%",
    height: "3.5rem"
};

const Buttons_btn1 = {
    backgroundColor: "red",
    display: "table-cell",
    color: "white",
    fontSize: "1rem",
    lineHeight: "3.5rem",
    textAlign: "center",
    cursor: "pointer",
    transition: "background-color 0.3s",
    textDecoration: "none"
};

const Buttons_btn2 = {
    backgroundColor: "green",
    display: "table-cell",
    color: "white",
    fontSize: "1rem",
    lineHeight: "3.5rem",
    textAlign: "center",
    cursor: "pointer",
    transition: "background-color 0.3s",
    textDecoration: "none"
};

const Button = ({ onCreate, onRemove }) => {
    return(
        <div style={ Buttons }>
            <div style={ Buttons_btn1 } onClick={ onCreate }>
                CREATE
            </div>
            <div style={ Buttons_btn2 } onClick={ onRemove }>
                REMOVE
            </div>
        </div>
    );
};

Button.propTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
}

Button.defaultProps = {
    onCreate: () => {console.log("onCreate didn't work")},
    onRemove: () => {console.log("onRemove didn't work")}
}

export default Button;