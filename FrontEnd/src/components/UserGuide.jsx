import AdminNavBar from "./AdminNavBar";

const UserGuide = () => {
  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />
      <div className="mt-[40px] w-full mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">User Guide</h1>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-xl text-[#464255] font-semibold">Introduction</h2>
          <p className="text-[#464255] mt-2">
            Welcome to the Pharmacy Stock Management System! This system helps
            you efficiently manage stock, track inventory, and generate reports.
            This guide provides step-by-step instructions to get you started.
          </p>
        </section>

        {/* Features */}
        <section className="mb-8">
          <h2 className="text-xl text-[#464255] font-semibold">Key Features</h2>
          <ul className="list-disc ml-6 mt-2 text-[#464255]">
            <li>Add and manage stock items.</li>
            <li>Track inventory in real-time.</li>
            <li>Generate detailed reports for analysis.</li>
            <li>Set alerts for low stock items.</li>
          </ul>
        </section>

        {/* How-To Sections */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">How to Use</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              1. Adding New Stock
            </h3>
            <p className="text-gray-600 mt-2">
              Navigate to the &quot;Add Stock&quot; page, fill out the required
              fields (e.g., product name, quantity, expiry date), and click
              &quot;Submit.&quot;
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              2. Checking Inventory
            </h3>
            <p className="text-gray-600 mt-2">
              Go to the &quot;Inventory&quot; page to view a list of all
              available products along with their quantities and expiry dates.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              3. Generating Reports
            </h3>
            <p className="text-gray-600 mt-2">
              Visit the &quot;Reports&quot; page, select the desired filters
              (e.g., date range), and click &quot;Generate&quot; to view or
              download the report.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">FAQs</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Q: How do I reset my password?
            </h3>
            <p className="text-gray-600 mt-2">
              Go to the login page and click &quot;Forgot Password&quot; to
              receive a reset link via email.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700">
            Need More Help?
          </h2>
          <p className="text-gray-600 mt-2">
            Contact our support team at{" "}
            <a
              href="mailto:support@pharmacymanagement.com"
              className="text-blue-600 underline"
            >
              support@pharmacymanagement.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default UserGuide;
