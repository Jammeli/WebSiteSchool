import { FaChild } from "react-icons/fa"; // Importing the icon from react-icons
import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import FooterTwo from "../../components/Footer/FooterTwo";
import Logo from "../../assets/img/logo/logo-white-2.png";

const Maternelle = () => {
  return (
    <main>
      <Header />
      <Breadcrumb title="Maternelle" subTitle="Maternelle" />

      <div className="it-teacher-details-area pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="">
                <div className="it-teacher-details-right">
                  <div className="it-teacher-details-right-title-box">
                    {/* Adding the icon next to the title */}
                    <h2
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaChild style={{ marginRight: "10px" }} /> Maternelle
                    </h2>

                    <p>
                      L’école maternelle est le premier pas de la scolarité de
                      votre enfant. L’objectif premier est de donner l’envie aux
                      enfants d’aller à l’école pour apprendre et s’épanouir.
                    </p>

                    <ul style={{paddingLeft:"30px"}}>
                      <li>
                        On apprend à vivre ensemble, à travailler ensemble.
                      </li>
                      <li>On apprend à réguler nos comportements.</li>
                      <li>
                        On développe son langage oral (son vocabulaire, son
                        expression).
                      </li>
                      <li>On découvre l’écrit et les nombres.</li>
                      <li>
                        On prend conscience de notre environnement social.
                      </li>
                      <li>On développe notre motricité.</li>
                      <li>On s’épanouit par l’art et la musique.</li>
                      <br></br>
                    </ul>

                    <p>
                      En jouant, en chantant, en réfléchissant, en résolvant des
                      problèmes, en manipulant, en explorant, en inventant, en
                      imaginant, en créant, en se remémorant et en mémorisant,
                      l’enfant acquière les compétences et connaissances de base
                      pour poursuivre au cycle primaire.
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

export default Maternelle;
