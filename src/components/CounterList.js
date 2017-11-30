import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

const CounterListStyle = {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
}

const CounterList = ({ counters, onIncrement, onDecrement, onSetColor }) => {
    const counterList = counters.map(
        (counter, i) => {
            <Counter key={ i } index={ i } onIncrement={ onIncrement } onDecremen={ onDecrement } onSetColor={ onSetColor }/>
        }
    );
    return(
        <div style={ CounterListStyle }>
            { counterList }
        </div>
    );
};

CounterList.propTypes = {
    counters: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string,
        number: PropTypes.number
    })),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default CounterList;