import { Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage/NoPage";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
