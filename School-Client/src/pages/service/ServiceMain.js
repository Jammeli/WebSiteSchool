import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Category from "../home/CategorySection";

const ServiceMain = () => {
  return (
    <main>
      <Breadcrumb
        title="Clubs Extrascolaires"
        subTitle="Clubs Extrascolaires"
      />
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
                      Des clubs qui éveillent les passions !
                    </h2>

                    {/* Content for 9e et 10e année */}
                    <p>
                      En 9<sup>e</sup> et 10<sup>e</sup> année, votre enfant
                      poursuit son apprentissage des diverses langues (français,
                      arabe, et anglais), des mathématiques, de la science, de
                      l’histoire, de la géographie, de l’éducation physique et
                      de la technologie. De plus, votre enfant suivra des
                      séances d’orientation afin qu’il puisse découvrir ses
                      intérêts et les champs d’études postsecondaires pouvant
                      l’intéresser.
                    </p>

                    {/* Content for 11e et 12e année */}
                    <p>
                      En 11<sup>e</sup> et 12<sup>e</sup> année, votre enfant
                      poursuit son apprentissage des langues, des mathématiques,
                      de l’histoire et de la géographie de la Tunisie, mais de
                      plus, il suivra des cours en ligne provenant du Ontario
                      Virtual School au Canada selon son champs d’intérêts et de
                      ses intentions postsecondaires. À la fin de ce cycle,
                      votre enfant obtiendra le diplôme d’études secondaires du
                      ministère de l’Éducation de l’Ontario.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Category />
    </main>
  );
};
export default ServiceMain;
