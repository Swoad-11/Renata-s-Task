import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Task1 from "./components/Task_1/Task1";
import Task2 from "./components/Task_2/Task2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Task1 />} />
        <Route path="/dashboard" element={<Task2 />} />
      </Routes>
    </>
  );
}

export default App;
