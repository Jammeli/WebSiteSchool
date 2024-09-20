import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FooterTwo from "../../components/Footer/FooterTwo";
import Header from "../../components/Header";
import Logo from "../../assets/img/logo/logo-white-2.png";
import SingleFeature from "../../components/Feature";
import SectionTitle from "../../components/SectionTitle";


const MissionetValeurs = () => {
  return (
    <main>
      <Header />
      <Breadcrumb
        title="Mission et valeurs"
        subTitle="Mission et valeurs"
      />

      <div className="it-teacher-details-area pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="">
                <div className="it-teacher-details-right">
                  <div className="it-teacher-details-right-content mb-40">
                    <h4>Notre mission</h4>
                    <p>
                      L’École Canadienne de Sousse engage tous les élèves, de la
                      maternelle à la 12 e année, dans leur développement global
                      en vue de leur permettre de développer leur plein
                      potentiel et de devenir des citoyens positifs et
                      responsables pour la société de demain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="it-feature-3-area it-feature-3-bg inner-style pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-7 col-md-8">
              <SectionTitle
                titleClass="it-section-title-3"
                title="Nos valeurs"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <SingleFeature
                icon="fas fa-handshake"
                title="Engagement"
                description="S’engager à apprendre, à grandir et à contribuer positivement à notre communauté scolaire."
              />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <SingleFeature
                icon="fas fa-users"
                title="Respect"
                description="Développer et entretenir des relations harmonieuses au sein de notre communauté scolaire."
              />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <SingleFeature
                icon="fas fa-hand-holding-heart"
                title="Responsabilité"
                description="Développer un sens de la responsabilité envers le bien-être des membres de sa communauté scolaire."
              />
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <SingleFeature
                icon="fas fa-award"
                title="Excellence scolaire"
                description="Appliquer les exigences les plus élevées pour la réussite de nos élèves."
              />
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

export default MissionetValeurs;
