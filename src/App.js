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
import ContactUs from "./components/Contact Us Section/ContactUs";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/404/Error404";
import Talentlist from "./components/Clients List/Talentlist";

function App() {
  const [database] = useState(useGetData("users", "arr"));
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );

  useEffect(() => {
    !JSON.parse(localStorage.getItem("isLoggedIn")) &&
      localStorage.setItem("jobseeker", JSON.stringify({}));
    localStorage.setItem("isLoggedIn", JSON.stringify(token));
    localStorage.setItem("jobseekers", JSON.stringify(talents));
  });

  return (
    <div className="App">
      <Router>
        <Navigation token={token} setToken={setToken} />
        <Routes>
          {/* Home Route */}
          <Route exact path="/" element={<Homepage />} />
          {/* Login Route */}
          <Route path="/login" element={<Login setToken={setToken} />} />
          {/* Register Route */}
          <Route path="/register" element={<Register database={database} />} />
          {/* Job seeker Profile Route */}
          <Route path="/jobseeker" element={<Jobseeker />} />
          {/* Talents Route */}
          <Route path="/talents" element={<Talents />} />
          {/* Client Profile Route */}
          <Route path="/profile" element={<Profile setToken={setToken} />} />
          {/* Contact Us Route */}
          <Route exact path="/contact-us" element={<ContactUs />} />
          {/* Client's Talent-List*/}
          <Route exact path="/talent-list" element={<Talentlist />} />
          {/* Non-existent Route Handler */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
