import React from 'react';
import Button from './Button';
import CounterListContainer from '../containers/CounterListContainer';

import { connect } from 'react-redux';
import * as actions from '../actions';

const App = ({ onCreate, onRemove }) => {
    console.log("App")
    return (
        <div className="App">
            <Button onCreate={ onCreate } onRemove={ onRemove }/>
            <CounterListContainer/>
        </div>
    );
}

const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create()),
    onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapToDispatch)(App);
