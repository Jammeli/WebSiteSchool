import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import FooterTwo from "../../components/Footer/FooterTwo";
import Logo from "../../assets/img/logo/logo-white-2.png";

const Cantine = () => {
  return (
    <main>
      <Header />
      <Breadcrumb title="Cantine" subTitle="Cantine" />

      <div className="it-teacher-details-area pt-120 pb-120">
        <div className="container">
          <div className="it-teacher-details-wrap">
            <div className="row">
              <div className="">
                <div className="it-teacher-details-right">
                  <div className="it-teacher-details-right-title-box">
                    {/* Title styled as per the image */}
                    <h2
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Cantine{" "}
                    </h2>

                    {/* Content for 9e et 10e année */}
                    <p>
                      L’école offre un service de cantine.<br></br> Le parent
                      doit aviser l’école s’il souhaite que son enfant puisse
                      avoir accès au service de cantine et le parent aura à
                      payer des frais pour ce service.
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

export default Cantine;
