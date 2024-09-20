import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

import errorImg from "../../assets/img/error/error.png";

const ErrorMain = () => {
  return (
    <main>
      <Breadcrumb title="page 404" subTitle="page 404" />

      <div className="it-error-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 order-1 order-lg-0">
              <div
                className="it-error-content wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <h5 className="it-error-title">Désolé, page introuvable !</h5>
                <p className="mb-35">
                  Cette page est introuvable, mais nous vous invitons à
                  découvrir nos autres contenus en naviguant via le menu ou en
                  retournant à la page d'accueil.
                </p>
                <Link className="ed-btn-theme error-btn" to="/">
                Retour à la page d'accueil
                  <i className="fa-light fa-arrow-left"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-0 order-lg-1">
              <div className="it-error-thumb">
                <img src={errorImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorMain;
