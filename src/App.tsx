import { Routes, Route } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import { SearchProvider } from '@/context/AppContext';
import { AddUser } from '@/pages/AddUser';
import { Dashboard } from '@/pages/Dashboard';

function App() {
    return (
        <SearchProvider>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/adduser" element={<AddUser />} />
                </Route>
            </Routes>
        </SearchProvider>
    );
}

export default App;
