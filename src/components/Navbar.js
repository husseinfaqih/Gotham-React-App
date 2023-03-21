import { Link } from 'react-router-dom';
import { CharacterIDContext } from './CharacterIDContext';
import { useContext } from 'react';

const Navbar = () => {
  const { favorite } = useContext(CharacterIDContext);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h4>Gotham City</h4>
        <img
          src="https://www.freepnglogos.com/uploads/yellow-black-batman-logo-png-2.png"
          alt=""
        />
      </div>

      <div className="navbar-links">
        <li className="navbar-link">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-link">
          <Link to="/characters">Characters</Link>
        </li>
        <li className="navbar-link">
          <Link to="/favorite">Favorites {favorite.length} </Link>
        </li>
        <li className="navbar-link">
          <Link to="/RandomCharacter">Random Character</Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
