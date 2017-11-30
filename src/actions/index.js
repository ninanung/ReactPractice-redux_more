import * as types from "./ActionTypes";

export const increment = ({ index }) => ({
    type: types.INCREMENT,
    index
});

export const decrement = ({ index }) => ({
    type: types.DECREMENT,
    index
});

export const setColor = ({ index }) => ({
    type: types.SET_COLOR,
    index
});

export const create = () => ({
    type: types.CREATE
});

export const remove = () => ({
    type: types.REMOVE
});