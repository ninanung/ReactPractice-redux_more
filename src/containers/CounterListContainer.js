import React from 'react';
import CounterList from '../components/CounterList';
import { connect } from 'react-redux';
import { actions } from '../actions'

const stateToProps = (state) => ({
    counters: state.counters
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => dispatch(actions.setColor(index))
});

const CounterListContainer = connect(
    stateToProps,
    mapDispatchToProps
)(CounterList);

export default CounterListContainer;