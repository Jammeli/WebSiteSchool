import axios from "axios";
import React, { useEffect, useState } from "react";
import RowDetailsAdmissions from "./RowDetailsAdmissions";

function Array_Admissions() {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    axios
      .get("https://io.trustensia.com/api/formulaire-preinscription")
      .then((response) => setAdmissions(response.data)) // Access the data property
      .catch((error) => console.error("Error fetching admissions:", error)); // Optional: handle error
  }, []);

  return (
    <div className="card height-auto">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table display data-table text-nowrap">
            <thead>
              <tr>
                <th>Email</th>
                <th>Nom d'élève</th>
                <th>Prénom d'éleve</th>
                <th>Date de naissance</th>
                <th>Nationalité</th>
                <th>Genre</th>
                <th>Adresse de résidence</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map(
                ({
                  _id,
                  email,
                  nomEleve,
                  prenomEleve,
                  dateNaissanceEleve,
                  nationaliteEleve,
                  sexeEleve,
                  adresseResidence,
                  sante,
                  fratrieECT,
                  ecoleActuelle,
                  niveauScolaire,
                  situationFamiliale,
                  premierResponsableLegal,
                  deuxiemeResponsableLegal,
                  services,
                  engagements,
                }) => {
                  // Extract properties from sante
                  // Extract properties from sante
                  const eprouveDifficultes = sante
                    ? sante.eprouveDifficultes
                    : "Non spécifié";
                  const maladieChronique = sante
                    ? sante.maladieChronique
                    : "Non spécifié";
                  const allergieAlimentaire = sante
                    ? sante.allergieAlimentaire
                    : "Non spécifié";

                  // Extract properties from engagements
                  const exactitudeRenseignements = engagements
                    ? engagements.exactitudeRenseignements
                    : "Non spécifié";
                  const connaissanceConditions = engagements
                    ? engagements.connaissanceConditions
                    : "Non spécifié";
                  const connaissanceReglement = engagements
                    ? engagements.connaissanceReglement
                    : "Non spécifié";

                  // Extract properties from premierResponsableLegal
                  const nomPrenom1 = premierResponsableLegal
                    ? premierResponsableLegal.nomPrenom
                    : "Non spécifié";
                  const nationalite1 = premierResponsableLegal
                    ? premierResponsableLegal.nationalite
                    : "Non spécifié";
                  const profession1 = premierResponsableLegal
                    ? premierResponsableLegal.profession
                    : "Non spécifié";
                  const telephone1 = premierResponsableLegal
                    ? premierResponsableLegal.telephone1
                    : "Non spécifié";
                  const email1 = premierResponsableLegal
                    ? premierResponsableLegal.email1
                    : "Non spécifié";

                  // Extract properties from deuxiemeResponsableLegal
                  const nomPrenom2 = deuxiemeResponsableLegal
                    ? deuxiemeResponsableLegal.nomPrenom
                    : "Non spécifié";
                  const nationalite2 = deuxiemeResponsableLegal
                    ? deuxiemeResponsableLegal.nationalite
                    : "Non spécifié";
                  const profession2 = deuxiemeResponsableLegal
                    ? deuxiemeResponsableLegal.profession
                    : "Non spécifié";
                  const telephone2 = deuxiemeResponsableLegal
                    ? deuxiemeResponsableLegal.telephone2
                    : "Non spécifié";
                  const email2 = deuxiemeResponsableLegal
                    ? deuxiemeResponsableLegal.email2
                    : "Non spécifié";

                  // Extract properties from services
                  const panier = services ? services.panier : "Non spécifié";
                  const cantine = services ? services.cantine : "Non spécifié";
                  const garderie = services
                    ? services.garderie
                    : "Non spécifié";
                  const busScolaire = services
                    ? services.busScolaire
                    : "Non spécifié";

                  return (
                    <RowDetailsAdmissions
                      key={_id}
                      _id={_id}
                      email={email}
                      nomEleve={nomEleve}
                      prenomEleve={prenomEleve}
                      dateNaissanceEleve={dateNaissanceEleve}
                      nationaliteEleve={nationaliteEleve}
                      sexeEleve={sexeEleve}
                      adresseResidence={adresseResidence}
                      sante={
                        <div>
                          <p style={{ marginRight: "10px !important" }}>
                            Difficultés: {eprouveDifficultes ? "Oui" : "Non"}
                          </p>
                          <p style={{ marginRight: "10px" }}>
                            Maladie Chronique:{" "}
                            {maladieChronique ? "Oui" : "Non"}
                          </p>
                          <p style={{ marginRight: "10px" }}>
                            Allergie Alimentaire:{" "}
                            {allergieAlimentaire ? "Oui" : "Non"}
                          </p>
                        </div>
                      }
                      fratrieECT={fratrieECT}
                      ecoleActuelle={ecoleActuelle}
                      niveauScolaire={niveauScolaire}
                      situationFamiliale={situationFamiliale}
                      engagements={
                        <div>
                          <p style={{ marginRight: "10px" }}>
                            Exactitude des Renseignements:{" "}
                            {exactitudeRenseignements ? "Oui" : "Non"}
                          </p>
                          <p style={{ marginRight: "10px" }}>
                            Connaissance des Conditions:{" "}
                            {connaissanceConditions ? "Oui" : "Non"}
                          </p>
                          <p style={{ marginRight: "10px" }}>
                            Connaissance du Règlement:{" "}
                            {connaissanceReglement ? "Oui" : "Non"}
                          </p>
                        </div>
                      }
                      premierResponsableLegal={
                        <div>
                          <p style={{ marginRight: "10px" }}>
                            Nom et Prénom: {nomPrenom1}
                          </p>
                          <p style={{ marginRight: "10px" }}>
                            Nationalité: {nationalite1}
                          </p>
                          <p style={{ marginRight: "10px" }}>
                            Profession: {profession1}
                          </p>
                          <p style={{ marginRight: "10px" }}>
                            Téléphone: {telephone1}
                          </p>
                          <p style={{ marginRight: "10px" }}>Email: {email1}</p>
                        </div>
                      }
                      deuxiemeResponsableLegal={
                        <div>
                          <p style={{ marginRight: "10px" }}>
                            Nom et Prénom: {nomPrenom2}
                          </p>
                          <p style={{ marginRight: "10px" }}>
                            Nationalité: {nationalite2}
                          </p>
                          <p style={{ marginRight: "10px" }}>
                            Profession: {profession2}
                          </p>
                          <p style={{ marginRight: "10px" }}>
                            Téléphone: {telephone2}
                          </p>
                          <p style={{ marginRight: "10px" }}>Email: {email2}</p>
                        </div>
                      }
                      services={
                        <div>
                          <p style={{ marginRight: "10px" }}>
                            Panier: {panier ? "Oui" : "Non"}
                          </p>
                          <p style={{ marginRight: "10px" }}>
                            Cantine: {cantine ? "Oui" : "Non"}
                          </p>
                          <p style={{ marginRight: "10px" }}>
                            Garderie: {garderie ? "Oui" : "Non"}
                          </p>
                          <p style={{ marginRight: "10px" }}>
                            Bus Scolaire: {busScolaire ? "Oui" : "Non"}
                          </p>
                        </div>
                      }
                    />
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Array_Admissions;
