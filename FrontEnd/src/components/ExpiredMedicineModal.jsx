/* eslint-disable react/prop-types */
function ExpiredMedicineModal({ expiredCount, setShowModal }) {
  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Notification</h2>
        <p>{expiredCount} items expired today.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ExpiredMedicineModal;
