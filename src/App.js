import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Homepage from "./components/Homepage/Homepage";
import Register from "./components/Register/Register";
import useGetData from "./components/utils/useGetData";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Talents from "./components/Talents/Talents";
import talents from "./components/utils/data";
import Jobseeker from "./components/Jobseeker Profile/Jobseeker";

function App() {
  const [database] = useState(useGetData("users", "arr"));
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(token));
    localStorage.setItem("jobseekers", JSON.stringify(talents));
  });

  return (
    <div className="App">
      <Router>
        <Navigation token={token} />
        <Routes>
          {/* Route */}
          <Route path="/" element={<Homepage setToken={setToken} />} />

          {/* Route */}
          <Route exact path="/login" element={<Login setToken={setToken} />} />

          {/* Route */}
          <Route
            path={"/register"}
            element={<Register database={database} />}
          />

          {/* Route */}
          <Route path="/profile" element={<Profile />} />

          {/* Route */}
          {token && <Route path="/talents" element={<Talents />} />}

          {/* Route */}
          {token && <Route path="/jobseeker" element={<Jobseeker />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
