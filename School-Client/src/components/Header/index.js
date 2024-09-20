import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import MenuItemsOnePage from "./MenuItemsOnePage";
import RightArrow from "../SVG";
import OffCanvasInsta from "../OffCanvas";

import Logo from "../../assets/img/logo/logo-black.png";
import svgImg1 from "../../assets/img/header/1.svg";
import svgImg2 from "../../assets/img/header/2.svg";
import svgImg3 from "../../assets/img/header/3.svg";

const Header = (props) => {
  const { headerClass, headerLogo, onePage, parentMenu } = props;
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sticky Header is displayed after scrolling for 400 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <header className={headerClass ? headerClass : "it-header-height"}>
        <div className="ed-header-top-area ed-header-top-height black-bg-2">
          <div className="container">
            <div className="row">
              <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-4 col-sm-4">
                <div className="ed-header-top-left text-center text-md-start">
                  <ul>
                    <li className="d-none d-xxl-inline-block">
                      <i>
                        <img src={svgImg1} alt="" />
                      </i>
                      <a className="hover-anim" href="tel:(00)8757845682">
                        (+216) 98779977
                      </a>
                    </li>
                    <li>
                      <i>
                        <img src={svgImg2} alt="" />
                      </i>
                      <a
                        className="hover-anim"
                        href="mailto:contact@acadie.com.tn"
                      >
                        contact@acadie.com.tn
                      </a>
                    </li>
                    <li className="d-none d-xxl-inline-block">
                      <i>
                        <img src={svgImg3} alt="" />
                      </i>
                      <a
                        className="hover-anim"
                        target="_blank"
                        href="https://maps.app.goo.gl/AhfTtop9MN2PfJGa9"
                      >
                        Route de Msaken, Zaouit Sousse, 4081 Sousse.
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 d-none d-sm-block col-sm-8">
                <div className="ed-header-top-social-box text-end">
                  <div className="ed-header-top-social">
                    <a href="https://www.facebook.com/Ecole.Canadienne.Internationale.De.Sousse">
                      <svg
                        width="8"
                        height="15"
                        viewBox="0 0 8 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.05618 15V8.1583H7.35173L7.69613 5.49117H5.05618V3.7886C5.05618 3.01665 5.26966 2.49057 6.37789 2.49057L7.78905 2.48999V0.104422C7.54501 0.072709 6.70731 0 5.73231 0C3.69636 0 2.30252 1.24272 2.30252 3.52445V5.49117H0V8.1583H2.30252V15H5.05618Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_5_1002)">
                          <path
                            d="M10.2701 0H4.30804C2.36764 0 0.789062 1.57858 0.789062 3.51898V9.4811C0.789062 11.4214 2.36764 13 4.30804 13H10.2702C12.2105 13 13.789 11.4214 13.789 9.4811V3.51898C13.789 1.57858 12.2105 0 10.2701 0ZM13.0269 9.4811C13.0269 11.0012 11.7902 12.2379 10.2701 12.2379H4.30804C2.78788 12.2379 1.55118 11.0012 1.55118 9.4811V3.51898C1.55118 1.99881 2.78788 0.762114 4.30804 0.762114H10.2702C11.7902 0.762114 13.0269 1.99881 13.0269 3.51898V9.4811Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M7.28896 2.94531C5.32892 2.94531 3.73438 4.53986 3.73438 6.49989C3.73438 8.45993 5.32892 10.0545 7.28896 10.0545C9.24899 10.0545 10.8435 8.45993 10.8435 6.49989C10.8435 4.53986 9.24899 2.94531 7.28896 2.94531ZM7.28896 9.29236C5.74926 9.29236 4.49649 8.03969 4.49649 6.49989C4.49649 4.96019 5.74926 3.70743 7.28896 3.70743C8.82876 3.70743 10.0814 4.96019 10.0814 6.49989C10.0814 8.03969 8.82876 9.29236 7.28896 9.29236Z"
                            fill="currentcolor"
                          />
                          <path
                            d="M10.9288 1.68262C10.3495 1.68262 9.87842 2.15383 9.87842 2.73295C9.87842 3.31218 10.3495 3.78339 10.9288 3.78339C11.508 3.78339 11.9792 3.31218 11.9792 2.73295C11.9792 2.15373 11.508 1.68262 10.9288 1.68262ZM10.9288 3.02118C10.7699 3.02118 10.6405 2.89184 10.6405 2.73295C10.6405 2.57397 10.7699 2.44473 10.9288 2.44473C11.0877 2.44473 11.2171 2.57397 11.2171 2.73295C11.2171 2.89184 11.0877 3.02118 10.9288 3.02118Z"
                            fill="currentcolor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_5_1002">
                            <rect
                              width="13"
                              height="13"
                              fill="white"
                              transform="translate(0.789062)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="header-sticky"
          className={
            isVisible
              ? "ed-header-area ed-header-ptb header-sticky"
              : "ed-header-area ed-header-ptb"
          }
        >
          <div className="container">
            <div className="ed-header-wrapper p-relative">
              <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-2 col-lg-3 col-lg-6 col-md-6 col-6 col-sm-4">
                  <div className="ed-header-logo">
                    <Link to="/">
                      <img src={headerLogo ? headerLogo : Logo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-6 d-none d-xl-block">
                  <div className="ed-header-main-menu it-main-menu">
                    <nav className="it-menu-content">
                      {!onePage ? (
                        <MenuItems />
                      ) : (
                        <MenuItemsOnePage
                          parentMenu={parentMenu}
                          onePageStyle="onePage1"
                        />
                      )}
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-lg-6 col-md-6 col-6 col-sm-8">
                  <div className="ed-header-button d-flex justify-content-end align-items-center">
                    <div className="d-none d-md-block">
                      <Link to="/contact" className="ed-btn-theme">
                        Préinscription
                        <i>
                          <RightArrow />
                        </i>
                      </Link>
                    </div>
                    <div className="ed-header-5-bar ml-25 d-xl-none">
                      <button
                        className="it-menu-bar"
                        onClick={() => setIsOffCanvasOpen(true)}
                      >
                        <svg
                          width="24"
                          height="20"
                          viewBox="0 0 24 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 18.3333C10 17.4128 10.7462 16.6667 11.6667 16.6667H21.6667C22.5872 16.6667 23.3333 17.4128 23.3333 18.3333C23.3333 19.2538 22.5872 20 21.6667 20H11.6667C10.7462 20 10 19.2538 10 18.3333ZM0 1.66667C0 0.746183 0.746183 0 1.66667 0H21.6667C22.5872 0 23.3333 0.746183 23.3333 1.66667C23.3333 2.58713 22.5872 3.33333 21.6667 3.33333H1.66667C0.746183 3.33333 0 2.58713 0 1.66667ZM0 10C0 9.07953 0.746183 8.33333 1.66667 8.33333H21.6667C22.5872 8.33333 23.3333 9.07953 23.3333 10C23.3333 10.9205 22.5872 11.6667 21.6667 11.6667H1.66667C0.746183 11.6667 0 10.9205 0 10Z"
                            fill="#0E2A46"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="it-offcanvas-area">
        <div className={isOffCanvasOpen ? "itoffcanvas opened" : "itoffcanvas"}>
          <div className="it-offcanva-bottom-shape d-none d-xxl-block"></div>
          <div className="itoffcanvas__close-btn">
            <button
              className="close-btn"
              onClick={() => setIsOffCanvasOpen(false)}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="itoffcanvas__logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="itoffcanvas__text">
            <p>
              Suspendisse interdum consectetur libero id. Fermentum leo vel orci
              porta non. Euismod viverra nibh cras pulvinar suspen.
            </p>
          </div>
          <div className="it-menu-mobile d-xl-none">
            {!onePage ? (
              <MenuItems mobileMenu="show" />
            ) : (
              <MenuItemsOnePage
                parentMenu={parentMenu}
                onePageStyle="onePage1"
                mobileMenu="show"
              />
            )}
          </div>
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">Contact</h3>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-envelope"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Email</span>
                <a href="maito:contact@acadie.com.tn">contact@acadie.com.tn</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-phone-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Phone</span>
                <a href="tel:(+216) 98779977">(+216)98779977</a>
                <a href="tel:(+216) 73246650">(+216)73246650</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>Location</span>
                <a
                  href="https://maps.app.goo.gl/WjbnjvHXD17E47MM9"
                  target="_blank"
                >
                  Rond point Chadli Nouira Route de Msaken, Zaouit Sousse, 4081
                  Sousse.
                </a>
              </div>
            </div>
          </div>
          <OffCanvasInsta />
        </div>
      </div>

      {isOffCanvasOpen ? (
        <div
          className="body-overlay apply"
          onClick={() => setIsOffCanvasOpen(false)}
        ></div>
      ) : (
        <div className="body-overlay"></div>
      )}
    </>
  );
};
export default Header;
