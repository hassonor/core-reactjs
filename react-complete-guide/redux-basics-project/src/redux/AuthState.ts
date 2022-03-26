export class AuthState {
    public isAuthenticated: boolean = false;
}

export enum AuthActionType {
    AuthLogin = "AuthLogin",
    AuthLogout = "AuthLogout",
}

export interface AuthAction {
    type: AuthActionType;
    isAuthenticated?: boolean
}

export function AuthLoginAction(): AuthAction {
    return {type: AuthActionType.AuthLogin};
}

export function AuthLogoutAction(): AuthAction {
    return {type: AuthActionType.AuthLogout};
}


export const authReducer = (state: AuthState = new AuthState(),
                            action: AuthAction): AuthState => {
    const newState = {...state};
    switch (action.type) {
        case  AuthActionType.AuthLogin: {
            newState.isAuthenticated = true;
            return newState
        }
        case  AuthActionType.AuthLogout: {
            newState.isAuthenticated = false;
            return newState
        }
    }
    return newState
};

