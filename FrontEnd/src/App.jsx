import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <p className="">
        <Routes>
          {" "}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </p>
    </div>
  );
}

export default App;
