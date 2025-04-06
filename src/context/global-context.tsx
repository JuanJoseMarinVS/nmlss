import React, { createContext, useReducer, ReactNode } from 'react';

interface State {
    loading: boolean;
    isOpenMenu: boolean;
    isClosingMenu: boolean;
}

type Action =
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_IS_OPEN_MENU'; payload: boolean }
    | {
          type: 'SET_IS_CLOSING_MENU';
          payload: boolean;
      };

const initialState: State = {
    loading: false,
    isOpenMenu: false,
    isClosingMenu: false,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_IS_OPEN_MENU':
            return { ...state, isOpenMenu: action.payload };
        case 'SET_IS_CLOSING_MENU':
            return { ...state, isClosingMenu: action.payload };
        default:
            return state;
    }
};

const GlobalContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export const useGlobalState = () => React.useContext(GlobalContext);
