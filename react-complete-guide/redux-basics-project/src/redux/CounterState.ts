export enum CounterActionType {
    CounterDecrement = "CounterDecrement",
    CounterIncrement = "CounterIncrement",
}

export interface CounterAction {
    type: CounterActionType;
}

export function CounterIncrementAction(): CounterAction {
    return {type: CounterActionType.CounterIncrement};
}

export function CounterDecrementAction(): CounterAction {
    return {type: CounterActionType.CounterDecrement};
}


export const counterReducer = (state = {counter: 0}, action: CounterAction): any => {
    switch (action.type) {
        case  CounterActionType.CounterIncrement: {
            return {counter: state.counter + 1}
        }

        case  CounterActionType.CounterDecrement: {
            return {counter: state.counter - 1}
        }
        default:
            return state;
    }
};
