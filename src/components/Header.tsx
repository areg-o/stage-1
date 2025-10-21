import { useState } from 'react';
import { Link } from 'react-router-dom';
import '@/styles/index.css';

export function Header() {
    const [searchValue, setSearchValue] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setSearchValue('');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-sm border-b border-gray-200">
            <Link to="/" className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
                Dashboard
            </Link>
            <div className="flex items-center space-x-4">
                <input
                    id="search"
                    placeholder="Search"
                    type="search"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    value={searchValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <Link
                    to="/adduser"
                    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-200"
                >
                    Add New
                </Link>
            </div>
        </div>
    );
}
