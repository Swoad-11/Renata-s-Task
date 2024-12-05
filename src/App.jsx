import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Task1 from "./components/Task_1/Task1";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Task1 />} path="/" />
      </Routes>
    </>
  );
}

export default App;
