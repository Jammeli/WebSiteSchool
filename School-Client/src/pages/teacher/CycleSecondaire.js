import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import FooterTwo from "../../components/Footer/FooterTwo";
import Logo from "../../assets/img/logo/logo-white-2.png";

const CycleSecondaire = () => {
  return (
    <main>
      <Header />
      <Breadcrumb
        title="Système canadien de l’éducation"
        subTitle="Cycle secondaire"
      />

      <div className="it-teacher-details-area pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="">
                <div className="it-teacher-details-right">
                  <div className="it-teacher-details-right-title-box">
                    {/* Main title */}
                    <h2
                      className="text-center"
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      Système canadien de l’éducation
                    </h2>

                    <p>
                      <strong>Cycle secondaire</strong> <br></br>Le cycle
                      secondaire est composé de la 9 <sup>e</sup> à la 12{" "}
                      <sup>e</sup> année scolaire (4 ans de scolarité). L’élève
                      suit un cursus comprenant un nombre de crédits.
                      <br></br> En 11 <sup>e</sup> et 12 <sup>e</sup> année,
                      l’élève suit une partie de son cursus scolaire auprès du
                      Ontario Virtual School (OVS) au Canada. Les cours sont
                      offerts en ligne et l’ECIS appuie les élèves dans leurs
                      choix de cours. En plus des cours de OVS, l’école offre
                      aux élèves de la 11 <sup>e</sup> et la 12
                      <sup>e</sup> année, les cours suivants :
                    </p>

                    {/* List of subjects */}
                    <ul style={{paddingLeft:"30px"}}>
                      <li>Français</li>
                      <li>Arabe</li>
                      <li>Histoire et géographie de la Tunisie</li>
                      <li>Orientation</li>
                    </ul>

                    <p>
                        <br></br>
                      À la fin du cycle secondaire, l’élève se voit décerner le
                      diplôme de fin d’études secondaires du ministère de
                      l’Éducation de l’Ontario
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

export default CycleSecondaire;
