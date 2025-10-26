import { Route, Routes } from "react-router-dom";

import { ErrorBoundary, Layout } from "@/components";
import { AddUser, Dashboard } from "@/pages";
import { AppProvider } from "@/providers";

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/adduser" element={<AddUser />} />
          </Route>
        </Routes>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
