import "./App.css";
import Hero from "./assets/components/Hero";
const App = () => {
  return (
    <div className="app-container">
      <div>
        <nav className="navbar">
          <div className="logo">
            <img
              src="/images/skincare_logo.jpg"
              alt="logo"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
          <div className="nav-right">
            <ul className="nav-links">
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Location</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <button className="login-btn">Login</button>
          </div>
        </nav>
        {/* Page Title */}

        <h1 className="page-title">Your Skin</h1>
        <h1 className="page-title"> Deserves the Best</h1>
        {/* Add Hero Section */}

        <Hero />
      </div>
    </div>
  );
};
export default App;
