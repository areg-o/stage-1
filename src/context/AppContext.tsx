import { createContext, useContext, useState } from 'react';

import type { ISearchContext } from '@/context/searchContextType';

const SearchContext = createContext<ISearchContext | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <SearchContext.Provider value={{ searchText, setSearchText }}>
            {children}
        </SearchContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = (): ISearchContext => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};
