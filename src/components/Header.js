import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
    borderRadius: "10px"
  };

  return (
    <header >
      <h1>Daniel Rodriguez Showcase</h1>
      <nav className="head" style={navStyle}>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About Me</button>
        </Link>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;