import React, { useRef } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Logo from "../../assets/img/logo/logo-white-2.png";
import Header from "../../components/Header";
import FooterTwo from "../../components/Footer/FooterTwo";

const ContacterNous = () => {
  return (
    <main>
      <Header></Header>
      <Breadcrumb title="Contact" />

      <div className="it-contact__area pt-120 pb-120">
        <div className="container">
          <div className="it-contact__wrap fix z-index-3 p-relative">
            <div className="row align-items-end">
              <div className="">
                <div className="it-contact__right-box">
                  <div className="it-contact__content mb-55">
                    <ul>
                      <li>
                        <div
                          className="it-contact__list d-flex align-items-start"
                          
                        >
                          <div className="it-contact__icon">
                            <span>
                              <i className="fa-solid fa-location-dot"></i>
                            </span>
                          </div>
                          <div className="it-contact__text">
                            <span>Notre adresse</span>
                            <a
                              target="_blank"
                              href="https://maps.app.goo.gl/AhfTtop9MN2PfJGa9"
                            >
                              Rond point Chedly Nouira, Route de Msaken, Zaouit
                              Sousse, 4081 Sousse. <br />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="it-contact__list d-flex align-items-start"
                          
                        >
                          <div className="it-contact__icon">
                            <span>
                              <i className="fa-solid fa-clock"></i>
                            </span>
                          </div>
                          <div className="it-contact__text">
                            <span>Heures d'ouverture</span>
                            <a href="#">Lundi - Vendredi : 8H - 17H</a>
                            <span>[Samedi : 8H - 13H]</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="it-contact__list d-flex align-items-start"
                          
                        >
                          <div className="it-contact__icon">
                            <span>
                              <i className="fa-solid fa-phone phone"></i>
                            </span>
                          </div>
                          <div className="it-contact__text">
                            <span>contact</span>
                            <a href="tel:+21698779977">+216 98779977</a>
                            <a href="tel:+21673246650">+216 73246650</a>
                            <a href="mailto:contact@acadie.com.tn">
                              contact@acadie.com.tn
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTwo
        footerClass="it-footer-area it-footer-bg it-footer-style-5 ed-footer-style-5 inner-style black-bg pb-70"
        footerLogo={Logo}
        btnClass="it-btn-white sky-bg"
        copyrightTextClass="it-copyright-text inner-style text-center"
      />
    </main>
  );
};

export default ContacterNous;
