import * as types from "../actions/ActionTypes";
import { getRandomColor } from "../utils/getRandomColor";

const initialState = {
    counters: [
        {
            color: "black",
            number: 0
        }
    ]
};

const counter = (state = initialState, action) => {
    const { counters } = state;
    switch(action.type) {
        case types.CREATE:
            return {
                counters: [ ...state, {
                    color: getRandomColor(),
                    number: 0
                }]
            };
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            };
        case types.INCREMENT:
            counters[action.index].number += 1;
            return {
                counters: counters
            }
        case types.DECREMENT:
            counters[action.index].number -= 1;
            return {
                counters: counters
            }
        case types.SET_COLOR:
            counters[action.index].color = getRandomColor()
            return {
                counters: counters
            }
        default:
            return {
                state
            }
    }
};  

export default counter;