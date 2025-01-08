import { useEffect, useState } from "react";
import axios from "axios";
import AdminNavBar from "./AdminNavBar"; // Ensure you have this component

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  console.log(notifications);
  // Fetch notifications from the backend
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/sales/notifications"
        );
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  // Mark a notification as read
  const markAsRead = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/notifications/${id}`, {
        isRead: true,
      });

      // Update the UI after marking as read
      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === id ? { ...notif, isRead: true } : notif
        )
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  return (
    <div className="relative z-50 pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern-dashboard opacity-40 pointer-events-none"></div>
      <AdminNavBar />
      <h1 className="text-3xl text-[#464255] font-bold mt-8 mb-4">
        Notifications
      </h1>
      <ul className="space-y-4">
        {notifications.map((notif) => (
          <li
            key={notif.id}
            className={`relative z-50 p-4 rounded-lg shadow-md border ${
              notif.isRead ? "bg-gray-200" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center">
              <p className="text-[#464255] font-semibold">{notif.message}</p>
              {!notif.isRead && (
                <button
                  onClick={() => markAsRead(notif.id)}
                  className="text-sm text-blue-600"
                >
                  Mark as Read
                </button>
              )}
            </div>
            <small className="text-gray-600">
              {new Date(notif.createdAt).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
