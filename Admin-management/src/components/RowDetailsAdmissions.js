import React, { useState } from "react";

function RowDetailsAdmissions({
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
}) {
  const [showInfo, setShowInfo] = useState(false);
  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = () => setShowInfo(true);
  return (
    <>
      <tr>
        <td>{email}</td>
        <th>{nomEleve}</th>
        <td>{prenomEleve}</td>
        <td>{dateNaissanceEleve}</td>
        <td>{nationaliteEleve}</td>
        <td>{sexeEleve}</td>
        <td>{adresseResidence}</td>
        <td>
          <button
            type="button"
            className="btn btn-info"
            style={{ marginRight: "10px" }}
            onClick={handleShowInfo} // Affiche le modal des infos
          >
            Info
          </button>
        </td>
      </tr>
      {showInfo && (
        <div className="modal show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Détails</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseInfo}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Nom d'élève:</strong> {nomEleve}
                </p>
                <p>
                  <strong>Prénom d'éleve:</strong> {prenomEleve}
                </p>
                <p>
                  <strong>Date de naissance:</strong> {dateNaissanceEleve}
                </p>
                <p>
                  <strong>Nationalité:</strong> {nationaliteEleve}
                </p>
                <p>
                  <strong>Genre:</strong> {sexeEleve}
                </p>
                <p>
                  <strong>Adresse de résidence:</strong> {adresseResidence}
                </p>
                <p>
                  <strong>Santé:</strong> {sante}
                </p>
                <p>
                  <strong>Fratrie:</strong> {fratrieECT}
                </p>
                <p>
                  <strong>Ecole Actuelle:</strong> {ecoleActuelle}
                </p>
                <p>
                  <strong>Niveau Scolaire:</strong> {niveauScolaire}
                </p>
                <p>
                  <strong>Situation Familiale:</strong> {situationFamiliale}
                </p>
                <p>
                  <strong>1er Responsable Légal :</strong>{" "}
                  {premierResponsableLegal}
                </p>
                <p>
                  <strong>2ème Responsable Légal :</strong>{" "}
                  {deuxiemeResponsableLegal}
                </p>
                <p>
                  <strong>Services:</strong> {services}
                </p>
                <p>
                  <strong>Engagements:</strong> {engagements}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseInfo}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RowDetailsAdmissions;
