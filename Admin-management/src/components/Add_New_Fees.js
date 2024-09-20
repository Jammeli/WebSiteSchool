import React, { useEffect, useState } from "react";
import Side_Bar from "./Side_Bar";
import Top_Nav from "./Top_Nav";
import { jwtDecode } from "jwt-decode";
import Inputs from "./Inputs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add_New_Fees() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({
    niveau: "",
    anneeScolaire: "",
    montantMensuelle: null,
    fraisDossier: "",
    fraisReinscription: "",
    fraisPremiereInscription: "",
    serviceVieScolaire: "",
    panier: "",
    cantine: "",
    garderie: "",
    busScolaire: "",
  }); // Stocke l'email décodé du token

  useEffect(() => {
    // Vérifiez si le token est présent et non vide
    const token = localStorage.getItem("token"); // Utilisez getItem pour obtenir la valeur du token
    if (token) {
      try {
        const decode = jwtDecode(token);
        console.log(decode);
        console.log(decode.email);
        setEmail(decode.email); // Stockez l'email décodé dans l'état
      } catch (error) {
        console.error("Error decoding token:", error);
        // Vous pourriez rediriger l'utilisateur ou afficher un message d'erreur ici
      }
    } else {
      console.error("Token is not available in localStorage.");
      // Vous pourriez rediriger l'utilisateur ou afficher un message d'erreur ici
    }
  }, []);
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // Gestion des champs texte
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://io.trustensia.com/api/frais", form)
      .then((response) => {
        toast.success("Form and file uploaded successfully.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/get_fees");
        }, 3000);
      })
      .catch((error) => {
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
    <div id="wrapper" className="wrapper bg-ash">
      <ToastContainer />
      <Top_Nav email={email} />
      <div className="dashboard-page-one">
        <Side_Bar />
        <div className="dashboard-content-one">
          <div className="breadcrumbs-area ">
            <h3>Ajouter frais de scolarité</h3>
          </div>
          <div class="card height-auto">
            <div class="card-body">
              <form class="new-added-form" onSubmit={onSubmit}>
                <div class="row">
                  <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Niveau Scolaire *</label>
                    <Inputs
                      name="niveau"
                      type="text"
                      placeholder="Niveau"
                      className="form-control"
                      onChangeHandler={onChange}
                    />
                  </div>
                  <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Année Scolaire</label>
                    <Inputs
                      name="anneeScolaire"
                      type="text"
                      placeholder="Année Scolaire"
                      className="form-control"
                      onChangeHandler={onChange}
                    />
                  </div>
                  <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Montant Mensuel</label>
                    <Inputs
                      name="montantMensuelle"
                      type="text"
                      placeholder="Montant Mensuel"
                      className="form-control"
                      onChangeHandler={onChange}
                    />
                  </div>
                  <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Frais de Dossier</label>
                    <Inputs
                      name="fraisDossier"
                      type="text"
                      placeholder="Frais de Dossier"
                      className="form-control"
                      onChangeHandler={onChange}
                    />
                  </div>
                  <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Frais de Réinscription </label>
                    <Inputs
                      name="fraisReinscription"
                      type="text"
                      placeholder="Frais de Réinscription "
                      className="form-control"
                      onChangeHandler={onChange}
                    />
                  </div>
                  <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Frais de 1ère Inscription </label>
                    <Inputs
                      name="fraisPremiereInscription"
                      type="text"
                      placeholder="Frais de 1ère Inscription "
                      className="form-control"
                      onChangeHandler={onChange}
                    />
                  </div>
                  <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Service Vie Scolaire </label>
                    <Inputs
                      name="serviceVieScolaire"
                      type="text"
                      placeholder="Service Vie Scolaire "
                      className="form-control"
                      onChangeHandler={onChange}
                    />
                  </div>
                  <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Panier </label>
                    <Inputs
                      name="panier"
                      type="text"
                      placeholder="Panier"
                      className="form-control"
                      onChangeHandler={onChange}
                    />
                  </div>
                  <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Cantine </label>
                    <Inputs
                      name="cantine"
                      type="text"
                      placeholder="Cantine"
                      className="form-control"
                      onChangeHandler={onChange}
                    />
                  </div>
                  <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Garderie </label>
                    <Inputs
                      name="garderie"
                      type="text"
                      placeholder="Garderie"
                      className="form-control"
                      onChangeHandler={onChange}
                    />
                  </div>
                  <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Bus Scolaire </label>
                    <Inputs
                      name="busScolaire"
                      type="text"
                      placeholder="Bus Scolaire"
                      className="form-control"
                      onChangeHandler={onChange}
                    />
                  </div>
                  <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Type (Canadien/Tunisien/Tiers)</label>
                    <Inputs
                      name="option"
                      type="text"
                      placeholder="Canadien/Tunisien/Tiers"
                      className="form-control"
                      onChangeHandler={onChange}
                    />
                  </div>
                  <div class="col-12 form-group mg-t-8">
                    <button
                      type="submit"
                      class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                    >
                      Enregister
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_New_Fees;
