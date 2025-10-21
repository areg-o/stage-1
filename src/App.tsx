import { Routes, Route } from 'react-router-dom';

import { Header } from '@/components/Header';
import { AddUser } from '@/pages/AddUser';
import { Dashboard } from '@/pages/Dashboard';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/adduser" element={<AddUser />} />
            </Routes>
        </>
    );
}

export default App;
