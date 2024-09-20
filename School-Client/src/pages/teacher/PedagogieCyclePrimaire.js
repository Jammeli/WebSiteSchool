import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import FooterTwo from "../../components/Footer/FooterTwo";
import Logo from "../../assets/img/logo/logo-white-2.png";

const PedagogieCyclePrimaire = () => {
  return (
    <main>
      <Header />
      <Breadcrumb title="Cycle primaire" subTitle="Cycle primaire" />

      <div className="it-teacher-details-area pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="">
                <div className="it-teacher-details-right">
                  <div className="it-teacher-details-right-title-box">
                    {/* Title with red color and bold */}
                    <h2
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Cycle primaire{" "}
                      <span style={{ fontWeight: "normal" }}>
                        (1<sup>e</sup> à la 8<sup>e</sup> année)
                      </span>
                    </h2>

                    {/* Content matching the image */}
                    <p style={{ color: "#001F3F" }}>
                      Votre enfant poursuit des apprentissages de langues
                      (français, arabe et anglais), de la mathématique, de la
                      science, de l’univers social, des arts, de l’éducation
                      physique et du développement personnel et social de
                      l’élève. Au primaire, votre enfant évoluera dans une
                      environnement positif et inclusif qui lui permet de
                      réussir et de se surpasser.
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

export default PedagogieCyclePrimaire;
