/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
const StoreContext = createContext();

function StoreProvider({ children }) {
  const [unreadAlerts, setUnreadAlerts] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Initialize socket connection
    const socket = io("http://localhost:3000");

    // Listen for low stock alerts
    socket.on("lowStockAlert", (notification) => {
      setNotifications((prev) => [notification, ...prev]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await fetch("http://localhost:3000/notifications");
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };
  return (
    <StoreContext.Provider
      value={{
        unreadAlerts,
        setUnreadAlerts,
        showModal,
        setShowModal,
        notifications,
        fetchNotifications,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

function useStores() {
  const context = useContext(StoreContext);
  if (context === undefined) throw new Error("context used outside of scope");
  return context;
}

export { StoreProvider, useStores };
