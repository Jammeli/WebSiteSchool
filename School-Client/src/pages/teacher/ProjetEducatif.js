import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FooterTwo from "../../components/Footer/FooterTwo";
import Header from "../../components/Header";
import Logo from "../../assets/img/logo/logo-white-2.png";

const ProjetEducatif = () => {
  return (
    <main>
      <Header />
      <Breadcrumb
        title="Notre projet éducatif"
        subTitle="Notre projet éducatif"
      />

      <div className="it-teacher-details-area pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="">
                <div className="it-teacher-details-right">
                  <div className="it-teacher-details-right-content mb-40">
                    <h4>Notre projet éducatif</h4>
                    <p>
                      Notre projet éducatif privilégie la curiosité, le
                      dépassement de soi et l’ouverture sur le monde. On désire
                      former des jeunes qui pourront s’exprimer aisément dans
                      plusieurs langues, qui seront responsables, curieux,
                      cultivés, sûrs d’eux-mêmes et préoccupés par ce qui les
                      entoure. On désire former des élèves engagés dans leurs
                      apprentissages, qui font preuve d’initiative et qui sont
                      soucieux de leur réussite.
                    </p>
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

export default ProjetEducatif;
