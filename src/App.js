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
import Jobseeker from "./components/Jobseeker Profile/Jobseeker";
import ContactUs from "./components/Contact Us Section/ContactUs";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/404/Error404";
import Talentlist from "./components/Clients List/Talentlist";
import Developer from "./components/Developer/Developer";
import Pricing from "./components/Pricing/Pricing.jsx";
import Learn from "./components/Learn More Section/Learn";

function App() {
  const [database] = useState(useGetData("users", "arr"));

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          {/* Home Route */}
          <Route exact path="/" element={<Homepage />} />
          {/* Login Route */}
          <Route path="/login" element={<Login />} />
          {/* Register Route */}
          <Route path="/register" element={<Register database={database} />} />
          {/* Job seeker Profile Route */}
          <Route path="/jobseeker" element={<Jobseeker />} />
          {/* Talents Route */}
          <Route path="/talents" element={<Talents />} />
          {/* Client Profile Route */}
          <Route path="/profile" element={<Profile />} />
          {/* Contact Us Route */}
          <Route exact path="/contact-us" element={<ContactUs />} />
          {/* Client's Talent-List*/}
          <Route exact path="/talent-list" element={<Talentlist />} />
          {/*Developer Section*/}
          <Route exact path="/developers" element={<Developer />} />
          {/* Service page test */}
          <Route exact path="/pricing" element={<Pricing />} />
          {/* Article page test */}
          <Route exact path="/article" element={<Learn />} />
          {/* Non-existent Route Handler */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
