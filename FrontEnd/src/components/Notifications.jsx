import { useState } from "react";
import AdminNavBar from "./AdminNavBar";

const demoNotifications = [
  {
    id: 1,
    type: "alert",
    message: "Stock for Paracetamol is running low.",
    createdAt: "2024-12-01 10:30 AM",
    isRead: false,
  },
  {
    id: 2,
    type: "system",
    message: "System update scheduled for December 10, 2024.",
    createdAt: "2024-11-30 02:15 PM",
    isRead: true,
  },
  {
    id: 3,
    type: "alert",
    message: "5 items expired today. Check the stock.",
    createdAt: "2024-11-29 09:00 AM",
    isRead: false,
  },
  {
    id: 2,
    type: "system",
    message: "System update scheduled for December 10, 2024.",
    createdAt: "2024-11-30 02:15 PM",
    isRead: true,
  },
  {
    id: 3,
    type: "alert",
    message: "5 items expired today. Check the stock.",
    createdAt: "2024-11-29 09:00 AM",
    isRead: false,
  },
];

const Notifications = () => {
  // Use demo data as initial state
  const [notifications, setNotifications] = useState(demoNotifications);

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />
      <h1 className="text-3xl text-[#464255] font-bold mt-8 mb-4">
        Notifications
      </h1>
      <ul className="space-y-4">
        {notifications.map((notif) => (
          <li
            key={notif.id}
            className={`p-4 rounded-lg shadow-md border ${
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
            <small className="text-gray-600">{notif.createdAt}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
