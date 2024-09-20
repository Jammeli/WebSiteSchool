import React from "react";

const FooterTwo = (props) => {
  const { footerClass, footerLogo, btnClass, copyrightTextClass } = props;

  return (
    <footer>
      <div className="it-copyright-area it-copyright-height">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div
                className={
                  copyrightTextClass
                    ? copyrightTextClass
                    : "it-copyright-text style-2 text-center"
                }
              >
                <p>
                  Copyright &copy; 2024  ECIS développé par : <a href="#">M&D </a> || Tous droits réservés
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterTwo;
