import {
    createContext,
    useState,
} from 'react';

export const GlobalContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </GlobalContext.Provider>
    );
};