/* eslint-disable react/prop-types */
// import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
const StoreContext = createContext();
const socket = io("http://localhost:3000"); // Replace with your backend server URL
function StoreProvider({ children }) {
  const [unreadAlerts, setUnreadAlerts] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [markAsRead, setMarkAsRead] = useState(false);

  console.log(notificationCount);

  const navigate = useNavigate();

  useEffect(() => {
    // Listen for notification count updates from the server
    socket.on("notificationCount", ({ count }) => {
      setNotificationCount(count);
      toast.success("a new low-stock notification has arrived");
    });

    return () => {
      socket.off("notificationCount");
    };
  }, []);

  // Reset the notification count when the user views notifications
  const resetNotificationCount = async () => {
    try {
      // Make a POST request using Axios to reset the notification count
      const response = await axios.post(
        "http://localhost:3000/api/sales/reset-notifications",
        {
          userId: "default-user", // Replace with the actual user ID if needed
        }
      );

      // Check if the response is successful
      if (response.status === 200) {
        // Reset local notification count
        setNotificationCount(0);
        navigate("/dashboard/notify");
      } else {
        console.error(
          "Failed to reset notification count:",
          response.data.message
        );
      }
    } catch (error) {
      console.error(
        "Error occurred while resetting notification count:",
        error
      );
    }
  };

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
        notificationCount,
        resetNotificationCount,
        markAsRead,
        setMarkAsRead,
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
