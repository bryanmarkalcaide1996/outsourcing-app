import "./Footer.css";

function Footer(props) {
  const year = new Date().getFullYear();

  return <footer>&copy; Copyright Phenomenal Innovator {year} </footer>;
}

export default Footer;
