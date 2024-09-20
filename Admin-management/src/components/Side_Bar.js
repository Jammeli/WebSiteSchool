import React from "react";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom

function Side_Bar() {
  return (
    <div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
      <div className="mobile-sidebar-header d-md-none">
        <div className="header-logo">
          <Link to="/version1/dashboard">
            <img src="img/logo1.png" alt="logo" />
          </Link>
        </div>
      </div>
      <div className="sidebar-menu-content">
        <ul className="nav nav-sidebar-menu sidebar-toggle-view">
          <li className="nav-item">
            <Link to="/version1/dashboard" className="nav-link">
              <i className="flaticon-dashboard"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/version1/get_calendars" className="nav-link">
              <i className="flaticon-calendar"></i>
              <span>Calendrier Scolaire</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/version1/get_fees" className="nav-link">
              <i className="flaticon-money"></i>
              <span>Frais & Tarifs</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/version1/get_admissions" className="nav-link">
              <i className="flaticon-shopping-list"></i>
              <span>Préinscriptions</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/version1/get_news" className="nav-link">
              <i className="flaticon-script"></i>
              <span>Actualités</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Side_Bar;
