import { createContext, useContext, useState } from 'react';

interface ISearchContext<T> {
    searchText: T | string;
    setSearchText: (text: string) => void;
}

const SearchContext = createContext<ISearchContext<T> | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <SearchContext.Provider value={{ searchText, setSearchText }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = (): ISearchContext<T> | string => {
    const context = useContext(SearchContext);
    if (!context) return 'Error';
    return context;
};
