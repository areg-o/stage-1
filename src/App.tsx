import { Route, Routes } from "react-router-dom";

import { ErrorBoundary, Layout } from "@/components";
import { AddUser } from "@/pages/AddUser";
import { Dashboard } from "@/pages/Dashboard";
import { AppProvider } from "@/providers";

function App() {
  return (
    <AppProvider>
      <ErrorBoundary>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/adduser" element={<AddUser />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </AppProvider>
  );
}

export default App;
