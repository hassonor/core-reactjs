export class CounterState {
    public counter: number = 0
    public showCounter: boolean = true
}


export enum CounterActionType {
    CounterDecrement = "CounterDecrement",
    CounterIncrement = "CounterIncrement",
    CounterIncreaseByAmount = "CounterIncreaseByAmount",
    CounterToggle = "CounterToggle",
}

export interface CounterAction {
    type: CounterActionType;
    amount?: number
    showCounter?: boolean
}

export function CounterIncrementAction(): CounterAction {
    return {type: CounterActionType.CounterIncrement};
}

export function CounterDecrementAction(): CounterAction {
    return {type: CounterActionType.CounterDecrement};
}

export function CounterIncreaseByAmountAction(amount: number): CounterAction {
    return {type: CounterActionType.CounterIncreaseByAmount, amount};
}

export function CounterToggle(): CounterAction {
    return {type: CounterActionType.CounterToggle};
}


export const counterReducer = (state: CounterState = new CounterState(),
                               action: CounterAction): CounterState => {
    const newState = {...state};
    switch (action.type) {
        case  CounterActionType.CounterIncrement: {
            newState.counter = newState.counter + 1;
            return newState
        }
        case  CounterActionType.CounterDecrement: {
            newState.counter = newState.counter - 1;
            return newState
        }
        case  CounterActionType.CounterIncreaseByAmount: {
            newState.counter = newState.counter + action.amount;
            return newState
        }
        case CounterActionType.CounterToggle: {
            newState.showCounter = !newState.showCounter;
            return newState
        }
    }
    return newState
};
