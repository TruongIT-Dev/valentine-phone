import { Route, Routes } from "react-router-dom";
import Phone from "./components";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Phone />} />
      </Routes>
    </>
  );
}

export default App;
