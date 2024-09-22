import React, { useState } from "react";
import { Link } from "react-router-dom";

import homeImg1 from "../../assets/img/menu/home-1.jpg";
import homeImg2 from "../../assets/img/menu/home-2.jpg";
import homeImg3 from "../../assets/img/menu/home-3.jpg";
import homeImg4 from "../../assets/img/menu/home-4.jpg";
import homeImg5 from "../../assets/img/menu/home-5.jpg";

const MenuItems = (props) => {
  const { mobileMenu } = props;
  const [home, setHome] = useState(false);
  const [course, setCourse] = useState(false);
  const [page, setPage] = useState(false);
  const [blog, setBlog] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === "home") {
      setHome(!home);
      setCourse(false);
      setPage(false);
      setBlog(false);
    } else if (menu === "course") {
      setHome(false);
      setCourse(!course);
      setPage(false);
      setBlog(false);
    } else if (menu === "page") {
      setHome(false);
      setCourse(false);
      setPage(!page);
      setBlog(false);
    } else if (menu === "blog") {
      setHome(false);
      setCourse(false);
      setPage(false);
      setBlog(!blog);
    }
  };

  const handleClick = (e) => {
    if (mobileMenu) {
      e.preventDefault();
    }
  };

  return (
    <ul>
      <li className="has-dropdown p-static">
        {/* <Link
          to="/"
          className={`${home ? "expanded" : ""}`}
          onClick={handleClick}
        >
          <span>Accueil</span>
          <button
            className={`${
              home
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none `}
            onClick={() => {
              openMobileMenu("home");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link> */}
        <div
          className={
            home
              ? "it-submenu submenu has-home-img d-block"
              : "it-submenu submenu has-home-img"
          }
        >
          <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
            <div className="col home-img">
              <div className="home-img-thumb mb-15">
                <img src={homeImg1} alt="" />
                <div className="home-img-btn">
                  <Link className="it-btn-white-sm" to="/">
                    Multi Page
                  </Link>
                  <Link className="it-btn-white-sm" to="/home-one-page">
                    One Page
                  </Link>
                </div>
              </div>
              <div className="home-img-content text-center">
                <h4 className="home-img-title">
                  <Link to="/">Home 01</Link>
                </h4>
              </div>
            </div>
            <div className="col home-img">
              <div className="home-img-thumb mb-15">
                <img src={homeImg2} alt="" />
                <div className="home-img-btn">
                  <Link className="it-btn-white-sm" to="/home-2">
                    Multi Page
                  </Link>
                  <Link className="it-btn-white-sm" to="/home-2-one-page">
                    One Page
                  </Link>
                </div>
              </div>
              <div className="home-img-content text-center">
                <h4 className="home-img-title">
                  <Link to="/home-2">Home 02</Link>
                </h4>
              </div>
            </div>
            <div className="col home-img">
              <div className="home-img-thumb mb-15">
                <img src={homeImg3} alt="" />
                <div className="home-img-btn">
                  <Link className="it-btn-white-sm" to="/home-3">
                    Multi Page
                  </Link>
                  <Link className="it-btn-white-sm" to="/home-3-one-page">
                    One Page
                  </Link>
                </div>
              </div>
              <div className="home-img-content text-center">
                <h4 className="home-img-title">
                  <Link to="/home-3">Home 03</Link>
                </h4>
              </div>
            </div>
            <div className="col home-img">
              <div className="home-img-thumb mb-15">
                <img src={homeImg4} alt="" />
                <div className="home-img-btn">
                  <Link className="it-btn-white-sm" to="/home-4">
                    Multi Page
                  </Link>
                  <Link className="it-btn-white-sm" to="/home-4-one-page">
                    One Page
                  </Link>
                </div>
              </div>
              <div className="home-img-content text-center">
                <h4 className="home-img-title">
                  <Link to="/home-4">Home 04</Link>
                </h4>
              </div>
            </div>
            <div className="col home-img">
              <div className="home-img-thumb mb-15">
                <img src={homeImg5} alt="" />
                <div className="home-img-btn">
                  <Link className="it-btn-white-sm" to="/home-5">
                    Multi Page
                  </Link>
                  <Link className="it-btn-white-sm" to="/home-5-one-page">
                    One Page
                  </Link>
                </div>
              </div>
              <div className="home-img-content text-center">
                <h4 className="home-img-title">
                  <Link to="/home-5">Home 05</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="has-dropdown">
        <Link to="" className={course ? "expanded" : ""} onClick={handleClick}>
          <span>Notre école</span>
          <button
            className={`${
              course
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none`}
            onClick={() => {
              openMobileMenu("course");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={
            course ? "it-submenu submenu d-block" : "it-submenu submenu "
          }
          style={{ width: "370px" }}
        >
          <li>
            <Link to="/teacher-details">Mot de la direction</Link>
          </li>
          <li>
            <Link to="/projet-educatif">Notre projet éducatif</Link>
          </li>
          <li>
            <Link to="/mission-valeurs">Mission et valeurs</Link>
          </li>
          <li>
            <Link to="/programme-offert">Programme offert</Link>
          </li>
          <li>
            <ul>
              <span style={{ fontWeight: "bold", color: "red" }}>
                Système canadien de l’éducation
              </span>
              <li>
                <Link to="/cycle-primaire">Cycle primaire</Link>
              </li>
              <li>
                <Link to="/cycle-secondaire">Cycle secondaire</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/cart">Horaire de la journée</Link>
          </li>
          <li>
            <Link to="/calendrier-scolaire">Calendrier scolaire</Link>
          </li>
        </ul>
      </li>
      {/* <li>
        
        <Link to="/about-us">
          <span>Notre école</span>
          
        </Link>
        
      </li> */}
      <li className="has-dropdown">
        <Link to="" className={course ? "expanded" : ""} onClick={handleClick}>
          <span>Inscription</span>
          <button
            className={`${
              course
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none`}
            onClick={() => {
              openMobileMenu("course");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={
            course ? "it-submenu submenu d-block" : "it-submenu submenu"
          }
        >
          <li>
            <Link to="/etape-a-suivre">étape à suivre</Link>
          </li>
          <li>
            <Link to="/price">Frais des scolarité</Link>
          </li>
          <li>
            <Link to="/contact">Inscription en ligne</Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link to="" className={course ? "expanded" : ""} onClick={handleClick}>
          <span>Pédagogie</span>
          <button
            className={`${
              course
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none`}
            onClick={() => {
              openMobileMenu("course");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={
            course ? "it-submenu submenu d-block" : "it-submenu submenu"
          }
        >
          <li>
            <Link to="/maternelle">Maternelle</Link>
          </li>
          <li>
            <Link to="/pedagogie-cycle-Primaire">Cycle primaire</Link>
          </li>
          <li>
            <Link to="/pedagogie-cycle-secondaire">Cycle secondaire</Link>
          </li>
        </ul>
      </li>

      <li className="has-dropdown">
        <Link to="" className={blog ? "expanded" : ""} onClick={handleClick}>
          <span>Services connexes</span>
          <button
            className={`${
              blog
                ? "dropdown-toggle-btn dropdown-opened"
                : "dropdown-toggle-btn"
            } d-xl-none`}
            onClick={() => {
              openMobileMenu("blog");
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={blog ? "it-submenu submenu d-block" : "it-submenu submenu"}
        >
          <li>
            <Link to="/cantine">Cantine</Link>
          </li>
          <li>
            <Link to="/services-1">Clubs</Link>
          </li>
        </ul>
      </li>
      {/* <li>
        <Link to="/contact">
          <span>Contact</span>
        </Link>
      </li> */}
    </ul>
  );
};
export default MenuItems;
