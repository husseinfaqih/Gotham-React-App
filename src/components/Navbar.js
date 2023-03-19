import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <h4>Gotham City</h4>
      <div className="navbar-links">
        <li className="navbar-link">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-link">
          <Link to="/characters">Characters</Link>
        </li>
        <li className="navbar-link">
          <Link to="/favorite">Favorites</Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
