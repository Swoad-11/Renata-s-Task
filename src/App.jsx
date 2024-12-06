import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Task1 from "./components/Task_1/Task1";
import Task2 from "./components/task_2/Task2";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Task1 />} path="/" />
      </Routes>
      <Routes>
        <Route element={<Task2 />} path="/dashboard" />
      </Routes>
    </>
  );
}

export default App;
