import { Link } from 'react-router-dom';
import { CharacterIDContext } from './CharacterIDContext';
import { useContext } from 'react';

const Navbar = () => {
  const { favorite, setFavorite } = useContext(CharacterIDContext);

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
