import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import LoginPopup from "./components/LoginPopup";
import { useState } from "react";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  console.log(showLogin);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div>
        <Routes>
          <Route path="/" element={<HomePage setShowLogin={setShowLogin} />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
