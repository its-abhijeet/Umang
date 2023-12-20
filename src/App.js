import { Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage/NoPage";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import GeneralOPD from "./components/GeneralOPD";
import ConnectingToDoctors from "./components/Connecting";
import DoctorFound from "./components/DoctorsFound";
import VideoConsult from "./components/VideoConsult";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/dashboard/generalopd" exact element={<GeneralOPD />} />
      <Route
        path="/connectingtodocters"
        exact
        element={<ConnectingToDoctors />}
      />
      <Route path="/doctorsfound" exact element={<DoctorFound />} />
      <Route path="/videoconsult" exact element={<VideoConsult />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
