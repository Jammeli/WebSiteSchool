import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function RowDetails({ _id, anneeScolaire, niveau, emploiDeTemps }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [editedAnneeScolaire, setEditedAnneeScolaire] = useState(anneeScolaire);
  const [editedNiveau, setEditedNiveau] = useState(niveau);
  const [file, setFile] = useState(null);

  const handleShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);

  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = () => setShowInfo(true);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmitEdit = (e) => {
    if (!e) {
      console.error("Event object is undefined");
      return;
    }
    e.preventDefault(); // Empêche la soumission du formulaire par défaut

    const formData = new FormData();
    formData.append("anneeScolaire", editedAnneeScolaire);
    formData.append("niveau", editedNiveau);
    if (file) {
      formData.append("emploiDeTemps", file);
    }

    axios
      .put(
        `https://io.trustensia.com/api/calendrier-scolaire/${_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        toast.success("Form and file uploaded successfully.", {
          position: "top-center",
          autoClose: 3000,
        });
        handleCloseEdit(); // Fermer le modal après succès
      })
      .catch((error) => {
        toast.error("Failed to upload form and file", {
          position: "top-center",
          autoClose: 3000,
        });
        console.error("Error uploading form and file:", error);
      });
  };

  return (
    <>
      <tr>
        <th>{anneeScolaire}</th>
        <td>{niveau}</td>
        <td>
          <button
            type="button"
            className="btn btn-warning"
            style={{ marginRight: "10px" }}
            onClick={handleShowInfo}
          >
            Info
          </button>
          <button className="btn btn-primary" onClick={handleShowEdit}>
            Modifier
          </button>
        </td>
      </tr>

      {/* Modal pour afficher les infos */}
      {showInfo && (
        <div className="modal show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Détails du calendrier</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseInfo}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Année Scolaire:</strong> {anneeScolaire}
                </p>
                <p>
                  <strong>Niveau:</strong> {niveau}
                </p>
                <img
                  src={emploiDeTemps}
                  alt="Emploi de Temps"
                  style={{ width: "100%", height: "auto" }}
                />
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
      {/* Modal pour modifier */}
      {showEdit && (
        <div className="modal show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modifier les détails</h5>
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
                    <label className="form-label">Année Scolaire</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedAnneeScolaire}
                      onChange={(e) => setEditedAnneeScolaire(e.target.value)}
                    />
                  </div>
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
                    <label className="form-label">Emploi de Temps</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
                    />
                  </div>
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

export default RowDetails;
