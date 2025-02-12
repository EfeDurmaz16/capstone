function Nav() {
    return (
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-logo">
            <img
              src="../icons_assets/logo.svg"
              alt="Little Lemon Logo"
              className="logo"
            />
          </div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
            <li>
              <a href="#order-online">Order Online</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  
  export default Nav
  
  