import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RowDetailsFees({
  _id,
  niveau,
  anneeScolaire,
  montantMensuelle,
  fraisDossier,
  fraisReinscription,
  fraisPremiereInscription,
  serviceVieScolaire,
  panier,
  cantine,
  garderie,
  busScolaire,
  option,
}) {
  const [editedNiveau, setEditedNiveau] = useState(niveau);
  const [editedAnneeScolaire, setEditedAnneeScolaire] = useState(anneeScolaire);
  const [editedMontantMensuelle, setEditedMontantMensuelle] =
    useState(montantMensuelle);
  const [editedFraisDossier, setEditedFraisDossier] = useState(fraisDossier);
  const [editedFraisReinscription, setEditedFraisReinscription] =
    useState(fraisReinscription);
  const [editedFraisPremiereInscription, setEditedFraisPremiereInscription] =
    useState(fraisPremiereInscription);
  const [editedServiceVieScolaire, setEditedServiceVieScolaire] =
    useState(serviceVieScolaire);
  const [editedPanier, setEditedPanier] = useState(panier);
  const [editedCantine, setEditedCantine] = useState(cantine);
  const [editedGarderie, setEditedGarderie] = useState(garderie);
  const [editedBusScolaire, setEditedBusScolaire] = useState(busScolaire);
  const [editedOption, setEditedOption] = useState(option);
  const [showInfoModal, setShowInfoModal] = useState(false); // Pour afficher/fermer le modal des infos
  const [showEditModal, setShowEditModal] = useState(false); // Pour afficher/fermer le modal d'édition
  // Gestion de l'affichage et de la fermeture des modals
  const handleShowInfo = () => setShowInfoModal(true);
  const handleCloseInfo = () => setShowInfoModal(false);
  const handleShowEdit = () => setShowEditModal(true);
  const handleCloseEdit = () => setShowEditModal(false);

  const handleSubmitEdit = (e) => {
    if (!e || !e.preventDefault) {
      console.error("Event object is undefined or invalid");
      return;
    }
    e.preventDefault();
    // Assure-toi que l'événement est bien gér
    const updatedData = {
      niveau: editedNiveau,
      anneeScolaire: editedAnneeScolaire,
      montantMensuelle: editedMontantMensuelle,
      fraisDossier: editedFraisDossier,
      fraisReinscription: editedFraisReinscription,
      fraisPremiereInscription: editedFraisPremiereInscription,
      serviceVieScolaire: editedServiceVieScolaire,
      panier: editedPanier,
      cantine: editedCantine,
      garderie: editedGarderie,
      busScolaire: editedBusScolaire,
      option: setEditedOption,
    };

    // Remplacer `_id` par une valeur correcte s'il est bien passé dans les props
    if (_id) {
      axios
        .put(`https://io.trustensia.com/api/frais/${_id}`, updatedData)
        .then(() => {
          handleCloseEdit();
        })
        .catch(() => {});
    } else {
      console.error("Erreur : _id est manquant !");
    }
  };

  return (
    <>
      <ToastContainer />
      <tr>
        <td>{niveau}</td>
        <th>{anneeScolaire}</th>
        <td>{montantMensuelle}</td>
        <td>{fraisDossier}</td>
        <td>{fraisReinscription}</td>
        <td>{fraisPremiereInscription}</td>
        <td>{serviceVieScolaire}</td>
        <td>{panier}</td>
        <td>{cantine}</td>
        <td>{garderie}</td>
        <td>{busScolaire}</td>
        <td>{option}</td>
        <td>
          <button
            type="button"
            className="btn btn-info"
            style={{ marginRight: "10px" }}
            onClick={handleShowInfo} // Affiche le modal des infos
          >
            Info
          </button>
          <button className="btn btn-primary" onClick={handleShowEdit}>
            Modifier
          </button>
        </td>
      </tr>
      {/* Modal pour afficher les infos */}
      {showInfoModal && (
        <div className="modal show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Détails des frais scolaires</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseInfo} // Ferme le modal des infos
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Niveau:</strong> {niveau}
                </p>
                <p>
                  <strong>Année Scolaire:</strong> {anneeScolaire}
                </p>
                <p>
                  <strong>Montant Mensuelle:</strong> {montantMensuelle}
                </p>
                <p>
                  <strong>Frais de Dossier:</strong> {fraisDossier}
                </p>
                <p>
                  <strong>Frais de Réinscription:</strong> {fraisReinscription}
                </p>
                <p>
                  <strong>Frais de Première Inscription:</strong>{" "}
                  {fraisPremiereInscription}
                </p>
                <p>
                  <strong>Service Vie Scolaire:</strong> {serviceVieScolaire}
                </p>
                <p>
                  <strong>Panier:</strong> {panier}
                </p>
                <p>
                  <strong>Cantine:</strong> {cantine}
                </p>
                <p>
                  <strong>Garderie:</strong> {garderie}
                </p>
                <p>
                  <strong>Bus Scolaire:</strong> {busScolaire}
                </p>
                <p>
                  <strong>Type:</strong> {option}
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
      {/* Modal pour modifier les frais */}
      {showEditModal && _id && (
        <div className="modal show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modifier les frais scolaires</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseEdit}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmitEdit}>
                  <div className="mb-3">
                    <label className="form-label">Niveau</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedNiveau}
                      onChange={(e) => setEditedNiveau(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Année Scolaire</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedAnneeScolaire}
                      onChange={(e) => setEditedAnneeScolaire(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Montant Mensuel</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedMontantMensuelle}
                      onChange={(e) =>
                        setEditedMontantMensuelle(e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Frais de dossier</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedFraisDossier}
                      onChange={(e) => setEditedFraisDossier(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Frais de réinscription</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedFraisReinscription}
                      onChange={(e) =>
                        setEditedFraisReinscription(e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Frais de 1ère inscription
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedFraisPremiereInscription}
                      onChange={(e) =>
                        setEditedFraisPremiereInscription(e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Service vie scolaire</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedServiceVieScolaire}
                      onChange={(e) =>
                        setEditedServiceVieScolaire(e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Panier</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedPanier}
                      onChange={(e) => setEditedPanier(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Cantine</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedCantine}
                      onChange={(e) => setEditedCantine(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Garderie</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedGarderie}
                      onChange={(e) => setEditedGarderie(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Bus Scolaire</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedBusScolaire}
                      onChange={(e) => setEditedBusScolaire(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Type</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedOption}
                      onChange={(e) => setEditedOption(e.target.value)}
                    />
                  </div>
                  {/* Ajoutez ici les autres champs comme fraisDossier, fraisReinscription, etc. */}
                  <button type="submit" className="btn btn-success">
                    Sauvegarder les modifications
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RowDetailsFees;
