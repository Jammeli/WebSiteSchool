import React from "react";
import { useNavigate } from "react-router-dom";
function Top_Nav({ email }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token here (e.g., remove token from localStorage)
    localStorage.removeItem("token"); // Example for JWT token

    // Redirect to the login page
    navigate("/version1/login");
  };
  return (
    <div className="navbar navbar-expand-md header-menu-one bg-light">
      <div className="nav-bar-header-one">
        <div className="header-logo">
          <a href="index.html">
            <img src="img/logo.png" alt="logo" />
          </a>
        </div>
        <div className="toggle-button sidebar-toggle">
          <button type="button" className="item-link">
            <span className="btn-icon-wrap">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
      <div className="d-md-none mobile-nav-bar">
        <button
          className="navbar-toggler pulse-animation"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-navbar"
          aria-expanded="false"
        >
          <i className="far fa-arrow-alt-circle-down"></i>
        </button>
        <button type="button" className="navbar-toggler sidebar-toggle-mobile">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div
        className="header-main-menu collapse navbar-collapse"
        id="mobile-navbar"
      >
        <ul className="navbar-nav">
          <li className="navbar-item dropdown header-admin">
            <a
              className="navbar-nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="admin-title">
                <h5 className="item-title">{email}</h5>
                <span>Admin</span>
              </div>
              <div className="admin-img">
                <img src="img/figure/admin_user.jpg" alt="Admin" />
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="item-content">
                <ul className="settings-list">
                  <li>
                    <a href="" onClick={handleLogout}>
                      <i className="flaticon-turn-off"></i>Déconnexion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Top_Nav;
