export class UIState {
    public cartIsVisible: boolean = false
}

export enum UIActionType {
    UIToggle = "UIToggle",
}

export interface UIAction {
    type: UIActionType;
}

export function UIToggleAction(): UIAction {
    return {type: UIActionType.UIToggle};
}

export const uiReducer = (state: UIState = new UIState(),
                          action: UIAction): UIState => {
    const newState = {...state};
    switch (action.type) {
        case UIActionType.UIToggle: {
            newState.cartIsVisible = !newState.cartIsVisible;
            return newState
        }
    }
    return newState
};