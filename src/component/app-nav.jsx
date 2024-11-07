import { Link } from "react-router-dom";

const AppNav = () => {
  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="navbar  fixed-top shadow-sm bg-white navbar-expand-lg">
      <div className="container-fluid py-3 px-5">
        <a className="navbar-brand nav-logo" href="#">
          CodeWith
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/product">
              Product List
            </Link>
            {sessionStorage.getItem("token") && (
              <Link className="nav-link" to="/cart">
                Cart List
              </Link>
            )}
          </div>
        </div>
        {!sessionStorage.getItem("token") && (
          <Link className="btn btn-dark float-end" to="/login">
            Login
          </Link>
        )}

        {sessionStorage.getItem("token") && (
          <button onClick={logout} className="btn mx-2 btn-dark float-end">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default AppNav;
