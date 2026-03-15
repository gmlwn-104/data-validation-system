import { BrowserRouter, Routes, Route } from "react-router-dom";

import UsersPage from "./pages/UsersPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/users" element={<UsersPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;