import HomePage from "./pages/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPopup from "./components/LoginPopup";
import { useState, useEffect } from "react";
import AdminDashboard from "./components/AdminDashboard";
import Dashboard from "./pages/Dashboard";
import Notifications from "./components/Notifications";
import NewSale from "./components/NewSale";
// import SaleHistory from "./components/SaleHistory";
import AddMedicine from "./components/AddMedicine";
import AllMedicine from "./components/AllMedicine";
import LowStock from "./components/LowStock";
import ExpiryManagement from "./components/ExpiryManagement";
import SalesReport from "./components/SalesReport";
import InventoryReport from "./components/InventoryReport";
import FinancialReport from "./components/FinancialReport";
import CustomReport from "./components/CustomReport";
import SystemSetting from "./components/SystemSetting";
import UserGuide from "./components/UserGuide";
import ContactSupport from "./components/ContactSupport";
import Faqs from "./components/Faqs";
import Logout from "./components/Logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PurchaseMedicine from "./components/PurchaseMedicine";

import EditMedicine from "./components/EditMedicine";
import DailySales from "./components/DailySales";
import SalesDetails from "./components/SalesDetails";
import ExpiredMedicineModal from "./components/ExpiredMedicineModal";
import { io } from "socket.io-client";
import { StoreProvider } from "./contexts/storeContext";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [expiredMedicinesCount, setExpiredMedicinesCount] = useState(0);

  useEffect(() => {
    // Initialize socket connection
    const socket = io("http://localhost:3000"); // Replace with your backend URL

    // Log socket connection to ensure it’s successful
    socket.on("connect", () => {
      console.log("Connected to socket server!");
    });

    // Listen for the expired medicines alert
    socket.on("expiredMedicineAlert", (count) => {
      console.log("Expired medicines alert received:", count.length); // Debugging log
      if (count.length > 0) {
        setExpiredMedicinesCount(count.length); // If expired medicines are an array, count its length
        setShowModal(true); // Show the modal if expired medicines are detected

        // Play sound effect
        const alertSound = new Audio("/alert-1.mp3"); // Path to your sound file
        alertSound
          .play()
          .catch((error) => console.error("Error playing sound:", error));
      }
    });

    // Clean up socket connection
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      {showModal && (
        <ExpiredMedicineModal
          expiredCount={expiredMedicinesCount}
          setShowModal={setShowModal}
        />
      )}
      <div>
        <StoreProvider>
          <ToastContainer />
          <Routes>
            <Route
              path="/"
              element={<HomePage setShowLogin={setShowLogin} />}
            />
            <Route path="/dashboard" element={<AdminDashboard />}>
              {/* <Dashboard /> */}
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Dashboard />} />
              <Route path="notification" element={<Notifications />} />
              <Route path="newSale" element={<NewSale />} />
              <Route path="saleHistory" element={<DailySales />} />
              <Route
                path="/dashboard/saleHistory/sales-detail/:date"
                element={<SalesDetails />}
              />
              <Route path="medicines" element={<AllMedicine />} />
              <Route path="purchase" element={<PurchaseMedicine />} />
              <Route path="addStock" element={<AddMedicine />} />
              <Route path="editStock/:id" element={<EditMedicine />} />
              <Route path="lowStock" element={<LowStock />} />
              <Route path="expiryManagement" element={<ExpiryManagement />} />
              <Route path="salesReport" element={<SalesReport />} />
              <Route path="inventoryReport" element={<InventoryReport />} />
              <Route path="financialReport" element={<FinancialReport />} />
              <Route path="customReport" element={<CustomReport />} />
              <Route path="systemSetting" element={<SystemSetting />} />
              <Route path="notify" element={<Notifications />} />
              <Route path="userGuide" element={<UserGuide />} />
              <Route path="contactSupport" element={<ContactSupport />} />
              <Route path="faqs" element={<Faqs />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Routes>
        </StoreProvider>
      </div>
    </>
  );
}

export default App;
