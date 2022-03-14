import "./Homepage.css";

import homepage from "../../Assets/homepage.jpg";
import cyborg from "../../Assets/cyborg.png";
import coding from "../../Assets/coding.png";
import setting from "../../Assets/setting.png";

import Hero from "../Hero Section/Hero";
import Services from "../Services Section/Services";
import About from "../About us Section/About ";


function Homepage() {
  return (

//     <div className="binder">
//     <div className="container">
//       <section className="left-part">
//         <div className="content">
//          <h1 className="content-title">Optimizing Your Business Website Page. Starts Here!</h1>
//           <p>The Phenomenal Innovator</p>
//           <a href="/services">
//           <button> Find Out More</button>
//           </a>
//           <a href="/login">
//           <button> Log In</button>
//           </a>
//         </div>
//       </section>
//       <section className="right-part">
//          <img src={homepage} alt="homepage" className="homepage"/>
//       </section>
//       </div>
        
//         <section className="bottom-card">
//         <div className="title-container">
//         <h1 className="about">About Us</h1>
//         </div>
//         <div className="bottom">
//         <div className="bottom-container">
//             <div className="logo logo1"><img src={coding}/></div>
//             <div className="card-content">
//             <h1 className="card-title">What We Do</h1>
//             <ul className="cardlist">
//                 <li>Building a healthy foundation for your business</li>
//                 <li>Managing and growing your path by upgrading your website that's accessible by many customers</li>
//             </ul>
//             </div>
//         </div>
//         <div className="bottom-container">
//           <div className="logo logo2"><img src={setting}/></div>
//             <div className="card-content">
//             <h1 className="card-title">Why We Do</h1>
//             <ul className="cardlist">
//                 <li>As a Phenomenal Innovator we will make sure help your business have name and be seen by many people and become your future customers</li>
//                 <li>As a Phenomenal Innovator we want your dreams to come true</li>
//             </ul>
//             </div>
//         </div>
//         <div className="bottom-container">
//         <div className="logo logo3"><img src={cyborg}/></div>
//             <div className="card-content">
//             <h1 className="card-title">Who We Are</h1>
//             <ul className="cardlist">
//                 <li>The astounding developer company that will handle your website to make sure it will be accessible and up to date </li>
//                 <li>The company make sure to satisfy you and hired an excellent developer that will handle your website</li>
//             </ul>
//             </div>
//         </div>
//         </div>
//       </section>
//       </div>

    <article className="homepage">
      <a href="#hero">
        <div className="btt">Top</div>
      </a>
      <Hero />
      <Services />
      <About />
    </article>

  );
}

export default Homepage;
