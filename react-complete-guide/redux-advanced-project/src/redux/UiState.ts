export class UiState {
    public cartIsVisible: boolean = false
}


export enum UiActionType {
    Toggle = "Toggle",
}

export interface UiAction {
    type: UiActionType;
}

export function toggleAction(): UiAction {
    return {type: UiActionType.Toggle};
}

export const uiReducer = (state: UiState = new UiState(),
                          action: UiAction): UiState => {
    const newState = {...state};
    switch (action.type) {
        case  UiActionType.Toggle: {
            newState.cartIsVisible = !newState.cartIsVisible
            return newState
        }
    }
    return newState
};
