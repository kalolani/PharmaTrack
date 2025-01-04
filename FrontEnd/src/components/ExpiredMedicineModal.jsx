import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function ExpiredMedicineModal({ expiredCount, setShowModal }) {
  const navigate = useNavigate();
  const handleVisit = (e) => {
    e.preventDefault();
    navigate("dashboard/expiryManagement");
    setShowModal(false);
  };
  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-red-500 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white">Expired Items Alert</h2>
        <p className="text-white">{expiredCount} items expired today.</p>
        <div className="flex gap-4">
          <button
            className="mt-4 px-4 py-2 bg-white hover:bg-gray-200 text-gray-700 rounded border-none outline-none"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          <button
            onClick={handleVisit}
            className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded border-none"
          >
            Visit the expiry management page
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpiredMedicineModal;
