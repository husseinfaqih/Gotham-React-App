const Navbar = () => {
  return (
    <div className="navbar">
      <h4>Gotham City</h4>
      <div className="navbar-links">
        <li className="navbar-link">
          <a href="/">Home</a>
        </li>
        <li className="navbar-link">
          <a href="/characters">Characters</a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
