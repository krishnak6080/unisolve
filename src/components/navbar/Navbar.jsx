import "./navbar.scss";

const Navbar = () => {
  return <div className="navbar">
      <h1 className="nav-heading"><i class="fab fa-adn">Unisolve</i></h1>
      <input className="nav-search" type="text" placeholder="search"/>
      <i class="far fa-bell"></i>
      <h3 className="nav-name"><i class="far fa-user-circle"></i>Ritu<i class="fas fa-caret-down"></i></h3>
  </div>;
};

export default Navbar;
