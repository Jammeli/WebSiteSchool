import React, { useState } from "react";
import Inputs from "./Inputs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Add_News() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [message, setMessage] = useState("");

  // Fonction onChange pour les champs texte et fichier
  const onChange = (e) => {
    if (e.target.type === "file") {
      setForm({ ...form, [e.target.name]: e.target.files[0] }); // Gestion du fichier
    } else {
      setForm({ ...form, [e.target.name]: e.target.value }); // Gestion des champs texte
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("image", form.image);

    axios
      .post("https://io.trustensia.com/api/news", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setMessage("Form and file uploaded successfully");
        toast.success("Actualité ajoutée avec succès.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        setMessage("Failed to upload form and file");
        toast.error("Failed to upload form and file", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.error("Error uploading form and file:", error);
      });
  };
  return (
    <div className="col-4-xxxl col-12">
      <ToastContainer />
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>Ajouter actualité</h3>
            </div>
          </div>
          <form className="new-added-form" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-12-xxxl col-lg-6 col-12 form-group">
                <label>Titre</label>
                <Inputs
                  name="title"
                  type="text"
                  placeholder="Titre"
                  className="form-control"
                  onChangeHandler={onChange}
                />
              </div>
              <div className="col-12-xxxl col-lg-6 col-12 form-group">
                <label>Description</label>
                <Inputs
                  name="description"
                  type="text"
                  placeholder="Description
                  "
                  className="form-control"
                  onChangeHandler={onChange}
                />
              </div>
              <div className="col-12-xxxl col-lg-6 col-12 form-group">
                <label>Image</label>
                <Inputs
                  name="image"
                  type="file"
                  className="form-control"
                  onChangeHandler={onChange}
                  style={{ padding: "15px 15px !important" }}
                />
              </div>

              <div className="col-12 form-group mg-t-8">
                <button
                  type="submit"
                  className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                >
                  Enregister
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add_News;
