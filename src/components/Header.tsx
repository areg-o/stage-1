import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSearch } from '@/context/AppContext';

export function Header() {
    const [searchValue, setSearchValue] = useState('');
    const { setSearchText } = useSearch();

    const handleKeyDown = () => {
        setTimeout(() => setSearchText(searchValue), 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div>
            <Link to="/">Dashboard</Link>
            <div>
                <input
                    id="search"
                    placeholder="Search"
                    type="search"
                    value={searchValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <Link to="/adduser">Add New</Link>
            </div>
        </div>
    );
}
