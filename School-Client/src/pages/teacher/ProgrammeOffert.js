import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import FooterTwo from "../../components/Footer/FooterTwo";
import Logo from "../../assets/img/logo/logo-white-2.png";

const ProgrammeOffert = () => {
  return (
    <main>
      <Header />
      <Breadcrumb title="Programme offert" subTitle="Programme offert" />

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
                      Programme canadien offert à l’École Canadienne
                      Internationale de Sousse
                    </h2>

                    <p>
                      <strong>
                        L’école Canadienne Internationale de Sousse (ECIS)
                      </strong>{" "}
                      offre une programmation qui s’inspire des programmes
                      canadiens.
                      <br></br>Ce programme comprend les matières suivantes :
                    </p>

                    {/* List of subjects */}
                    <ul style={{paddingLeft:"30px"}}>
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

                    <ul style={{paddingLeft:"30px"}}>
                      <li>Arabe</li>
                      <li>Technologie</li>
                      <li>Histoire et géographie de la Tunisie</li>
                    </ul>

                    {/* Subtitle for educational trips */}
                    <h3 style={{ fontWeight: "bold", marginTop: "20px" }}>
                      Sorties éducatives
                    </h3>

                    <p>
                      L’école Canadienne Internationale de Sousse prévoit des
                      sorties éducatives chaque année. Les sorties permettent
                      d’enrichir les expériences appuyant le développement
                      global de l’élève.
                    </p>

                    {/* Additional details (if necessary) */}
                    <p>
                      Chaque sortie est planifiée pour offrir une expérience
                      éducative et amusante, permettant aux élèves de se
                      rapprocher de la nature, de découvrir de nouvelles
                      cultures et d'enrichir leurs connaissances.
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

export default ProgrammeOffert;
