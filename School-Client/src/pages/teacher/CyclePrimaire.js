import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import FooterTwo from "../../components/Footer/FooterTwo";
import Logo from "../../assets/img/logo/logo-white-2.png";

const CyclePrimaire = () => {
  return (
    <main>
      <Header />
      <Breadcrumb
        title="Système canadien de l’éducation"
        subTitle="Cycle primaire"
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
                      <strong>Cycle primaire</strong> <br></br>Le cycle primaire
                      est composé de la maternelle à la huitième année (9 ans de
                      scolarité).
                      <br></br> Le programme comprend les matières suivantes :
                    </p>

                    {/* List of subjects */}
                    <ul style={{ paddingLeft: "30px" }}>
                      <li>Français</li>
                      <li>Mathématiques</li>
                      <li>Sciences humaines</li>
                      <li>Science de la nature</li>
                      <li>Formation personnelle</li>
                      <li>Anglais</li>
                      <li>Éducation artistique</li>
                      <li>Éducation physique</li>
                    </ul>
                    <br></br>

                    <p>
                      Les matières locales suivantes s’ajoutent à l’offre du
                      programme :
                    </p>

                    <ul style={{ paddingLeft: "30px" }}>
                      <li>Arabe</li>
                      <li>
                        Technologie (à partir de la 3 <sup>e</sup> année)
                      </li>
                      <li>
                        Orientation (à partir de la 7 <sup>e</sup> année)
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

export default CyclePrimaire;
