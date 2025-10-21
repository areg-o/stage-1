import { Routes, Route } from 'react-router-dom';

import { Header } from '@/components/Header';
import { SearchProvider } from '@/context/AppContext';
import { AddUser } from '@/pages/AddUser';
import { Dashboard } from '@/pages/Dashboard';

function App() {
    return (
        <SearchProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/adduser" element={<AddUser />} />
            </Routes>
        </SearchProvider>
    );
}

export default App;
