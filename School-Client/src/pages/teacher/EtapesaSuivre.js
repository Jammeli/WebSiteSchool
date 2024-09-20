import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import FooterTwo from "../../components/Footer/FooterTwo";
import Logo from "../../assets/img/logo/logo-white-2.png";

const EtapesaSuivre = () => {
  return (
    <main>
      <Header />
      <Breadcrumb title="Étapes à suivre" subTitle="Étapes à suivre" />

      <div className="it-teacher-details-area pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="">
                <div className="it-teacher-details-right">
                  <div className="it-teacher-details-right-title-box">
                    <h2 style={{ fontWeight: "bold" }}>Étapes à suivre</h2>
                    <br></br>

                    {/* Step 1 */}
                    <h3 style={{ color: "red", fontWeight: "bold" }}>
                      Étape 1
                    </h3>
                    <ul style={{paddingLeft:"30px"}}>
                      <li>Remplir la fiche d'inscription et la signer <Link to="/contact" style={{color:"blue"}}>(préinscription en ligne)</Link></li>
                      <li>
                        Remettre les rapports médicaux provenant de médecin ou
                        des spécialistes de l’enfant (s’il y a lieu).
                      </li>
                      <li>
                        Remettre une copie du dernier bulletin de l’enfant.
                      </li>
                      <br></br>
                    </ul>

                    {/* Step 2 */}
                    <h3 style={{ color: "red", fontWeight: "bold" }}>
                      Étape 2
                    </h3>
                    <ul style={{paddingLeft:"30px"}}>
                      <li>Payer les frais du test d’entrée.</li>
                      <li>L'enfant passe le test d’entrée.</li>
                      <br></br>
                    </ul>

                    {/* Step 3 */}
                    <h3 style={{ color: "red", fontWeight: "bold" }}>
                      Étape 3
                    </h3>
                    <ul style={{paddingLeft:"30px"}}>
                      <li>
                        La direction pédagogique statuera sur la demande
                        d'admission et en informera le parent.
                      </li>
                      <br></br>
                    </ul>

                    {/* Step 4 */}
                    <h3 style={{ color: "red", fontWeight: "bold" }}>
                      Étape 4
                    </h3>
                    <p>
                      Si l'enfant est accepté, le parent règle les frais de
                      l'inscription selon les délais prescrits et complète le
                      dossier de l'enfant en remettant à l'école les documents
                      suivants :
                    </p>
                    <ul style={{paddingLeft:"30px"}}>
                      <li>L'extrait de naissance et 3 photos de l'enfant</li>
                      <li>Une attestation médicale de bonne santé</li>
                      <li>Copie des cartes CIN des parents</li>
                      <li>Carnet de vaccin</li>
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

export default EtapesaSuivre;
