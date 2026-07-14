import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddLabEntry from "./components/AddEntry";
import ViewLabEntry from "./components/ViewEntry";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/add-lab-entry" element={<AddLabEntry />} />

        <Route path="/view-lab-entry" element={<ViewLabEntry />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;