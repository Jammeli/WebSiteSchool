import React, { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumb";
import shapeImg from "../../assets/img/price/shape-1.png";

const PriceMain = () => {
  const [frais, setFrais] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://io.trustensia.com/api/frais");
        setFrais(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des frais :", error);
        setError("Échec du chargement des données");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      <Breadcrumb
        title="Frais des scolarités"
        subTitle="Frais des scolarités"
      />

      <div className="it-price-area pt-120 pb-60">
        <div className="container">
          <div className="row">
            {frais.map((fraisData, index) => {
              const montantMensuelle =
                parseFloat(fraisData.montantMensuelle) || 0;
              const montantTrimestre = montantMensuelle / 3;

              return (
                <div key={index} className="col-xl-4 col-lg-6 col-md-6 mb-60">
                  <div className="it-price-item-wrap p-relative z-index">
                    <div className="it-price-shape-1">
                      <img src={shapeImg} alt="Shape" />
                    </div>
                    <div className="it-price-category text-center">
                      <span>{fraisData.niveau}</span>
                    </div>
                    <div className="it-price-item">
                      <div className="it-price-category-wrap">
                        <div className="it-price-month text-center">
                          <span>
                            {fraisData.montantMensuelle}
                            <i> Annuel</i>
                          </span>
                        </div>
                        <div className="text-center">
                          <p>
                            Année Scolaire :{" "}
                            <strong>{fraisData.anneeScolaire}</strong>
                          </p>
                        </div>
                      </div>
                      <div className="it-price-list text-center">
                        <div className="it-price-list text-center">
                          <p>
                            Montant par trimestre :{" "}
                            <strong>
                              {montantMensuelle > 0
                                ? montantTrimestre.toFixed(2)
                                : "N/A"}{" "}
                              TND
                            </strong>
                          </p>
                        </div>
                        <ul>
                          <li>
                            <i className="fa-light fa-check"></i> Frais de
                            dossier :{" "}
                            <strong>
                              {fraisData.fraisDossier}{" "}
                              {fraisData.fraisDossier.toLowerCase() !==
                                "gratuit" && "TND"}
                            </strong>
                          </li>
                          <li>
                            <i className="fa-light fa-check"></i> Frais de
                            réinscription :{" "}
                            <strong>
                              {fraisData.fraisReinscription}{" "}
                              {fraisData.fraisReinscription.toLowerCase() !==
                                "gratuit" && "TND"}
                            </strong>
                          </li>
                          <li>
                            <i className="fa-light fa-check"></i> Frais de 1
                            <sup>ère</sup> inscription :{" "}
                            <strong>
                              {fraisData.fraisPremiereInscription}{" "}
                              {fraisData.fraisPremiereInscription.toLowerCase() !==
                                "gratuit" && "TND"}
                            </strong>
                          </li>
                          <li>
                            <i className="fa-light fa-check"></i> Service de la
                            vie scolaire :{" "}
                            <strong>
                              {fraisData.serviceVieScolaire}{" "}
                              {fraisData.serviceVieScolaire.toLowerCase() !==
                                "gratuit" && "TND"}
                            </strong>
                          </li>
                          <li>
                            <i className="fa-light fa-check"></i> Panier :{" "}
                            <strong>
                              {fraisData.panier}{" "}
                              {fraisData.panier.toLowerCase() !== "gratuit" &&
                                "TND"}
                            </strong>
                          </li>
                          <li>
                            <i className="fa-light fa-check"></i> Cantine :{" "}
                            <strong>
                              {fraisData.cantine}{" "}
                              {fraisData.cantine.toLowerCase() !== "gratuit" &&
                                "TND"}
                            </strong>
                          </li>
                          <li>
                            <i className="fa-light fa-check"></i> Garderie :{" "}
                            <strong>
                              {fraisData.garderie}{" "}
                              {fraisData.garderie.toLowerCase() !== "gratuit" &&
                                "TND"}
                            </strong>
                          </li>
                          <li>
                            <i className="fa-light fa-check"></i> Bus scolaire :{" "}
                            <strong>
                              {fraisData.busScolaire}{" "}
                              {fraisData.busScolaire.toLowerCase() !==
                                "gratuit" && "TND"}
                            </strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-center">
                      <strong style={{ color: "white" }}>
                        {fraisData.option}
                      </strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PriceMain;
