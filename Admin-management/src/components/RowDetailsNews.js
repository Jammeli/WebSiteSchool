import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function RowDetailsNews({ _id, title, description, image }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
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
    formData.append("title", editedTitle);
    formData.append("description", editedDescription);
    if (file) {
      formData.append("image", file);
    }

    axios
      .put(`https://io.trustensia.com/api/news/${_id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
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
        <th>{title}</th>
        <td>{description}</td>
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
                  <strong>Title:</strong> {title}
                </p>
                <p>
                  <strong>Description:</strong> {description}
                </p>
                <img
                  src={image}
                  alt="Image"
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
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Image</label>
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

export default RowDetailsNews;
