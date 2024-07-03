import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArrayList from "./ArrayList";
import Layout from "./Layout";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/ArrayList" element={<ArrayList />} />
      </Routes>
    </Router>
  );
}
