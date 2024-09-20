import React, { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumb from "../../components/Breadcrumb";
import "./styles.css";
import nationalities from "./nationalities";
import { useNavigate } from "react-router-dom";

const ContactMain = () => {
  const formRef = useRef();
  const navigate = useNavigate();

  // State to manage the form data
  const [formData, setFormData] = useState({
    email: "",
    nomEleve: "",
    prenomEleve: "",
    dateNaissanceEleve: "",
    nationaliteEleve: "",
    sexeEleve: "",
    adresseResidence: "",
    sante: {
      eprouveDifficultes: false,
      maladieChronique: false,
      allergieAlimentaire: false,
    },
    fratrieECT: "",
    ecoleActuelle: "",
    niveauScolaire: "",
    situationFamiliale: "",
    premierResponsableLegal: {
      nomPrenom: "",
      nationalite: "",
      profession: "",
      telephone1: "",
      email1: "",
    },
    deuxiemeResponsableLegal: {
      nomPrenom: "",
      nationalite: "",
      profession: "",
      telephone2: "",
      email2: "",
    },
    services: {
      panier: false,
      cantine: false,
      garderie: false,
      busScolaire: false,
    },
    engagements: {
      exactitudeRenseignements: false,
      connaissanceConditions: false,
      connaissanceReglement: false,
    },
  });

  // Function to handle changes in text inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle changes in nested fields like sante, services, etc.
  const handleNestedChange = (event) => {
    const { name, value, checked } = event.target;
    const keys = name.split(".");
    setFormData((prev) => ({
      ...prev,
      [keys[0]]: {
        ...prev[keys[0]],
        [keys[1]]: value === "on" ? checked : value,
      },
    }));
  };

  // Function to handle changes in checkboxes for services
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [name]: checked,
      },
    }));
  };

  // Function to handle changes in checkboxes for engagements
  const handleEngagementsChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      engagements: {
        ...prev.engagements,
        [name]: checked,
      },
    }));
  };

  // Function to get the current academic year
  const getAcademicYear = () => {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear - 1;
    return `${nextYear} - ${currentYear}`;
  };

  // Function to get the next academic year
  const getAcademicYear2 = () => {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    return `${currentYear} - ${nextYear}`;
  };

  const academicYear = getAcademicYear();
  const academicYear2 = getAcademicYear2();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://io.trustensia.com/api/formulaire-preinscription", formData)
      .then((response) => {
        toast.success("Formulaire soumis avec succès!", {
          onClose: () => navigate("/"), // Navigate after toast closes
          autoClose: 3000, // Optional: adjust the duration before navigation
        });
      })
      .catch((error) => {
        toast.error(
          "Il y a eu une erreur lors de la soumission du formulaire! Vérifiez les champs à remplir."
        );
      });
  };

  return (
    <main>
      <Breadcrumb title="Formulaire de préinscription" />

      <div className="it-contact__area pt-120 pb-120">
        <div className="container">
          <div className="it-contact__wrap fix z-index-3 p-relative">
            <div
              className="it-contact__shape-1 d-none d-xl-block "
              style={{ width: "200px" }}
            ></div>
            <div className="row">
              <div className="it-contact__right-box">
                <div className="it-contact__section-box pb-20">
                  <p className="text-center">
                    Afin d'inscrire votre enfant pour la rentrée à venir, nous
                    vous invitons à remplir le formulaire ci-dessous.
                  </p>
                </div>
              </div>

              <div className="">
                <div className="it-contact__form-box ">
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="row">
                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Adresse email*</label>
                              <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Prénom de l'élève : *</label>
                              <input
                                type="text"
                                name="prenomEleve"
                                placeholder="Prénom de l'élève"
                                value={formData.prenomEleve}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Nationalité de l'élève : *</label>
                              <select
                                name="nationaliteEleve"
                                className="custom-dropdown"
                                value={formData.nationaliteEleve}
                                onChange={handleChange}
                              >
                                <option value="">Sélectionner</option>
                                {nationalities.map((nationality, index) => (
                                  <option key={index} value={nationality}>
                                    {nationality}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Adresse de résidence : *</label>
                              <input
                                type="text"
                                name="adresseResidence"
                                placeholder="Adresse de résidence"
                                value={formData.adresseResidence}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Fratrie ECIS : * </label>
                              <select
                                name="fratrieECT"
                                className="custom-dropdown"
                                value={formData.fratrieECT}
                                onChange={handleChange}
                              >
                                <option value="">Sélectionner</option>
                                <option value="Oui">Oui</option>
                                <option value="Non">Non</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>École actuelle {academicYear} : *</label>
                              <input
                                type="text"
                                name="ÉcoleActuelle"
                                placeholder="Ecole actuelle"
                                value={formData.ecoleActuelle}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Situation familiale * </label>
                              <select
                                name="situationFamiliale"
                                className="custom-dropdown"
                                value={formData.situationFamiliale}
                                onChange={handleChange}
                              >
                                <option value="">Sélectionner</option>
                                <option value="Marié">Marié</option>
                                <option value="Divorcé">Divorcé</option>
                                <option value="Autre">Autre</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-12 mb-25">
                            <div>PREMIER RESPONSABLE LÉGAL</div>
                            <div className="col-12 mb-25">
                              <div className="it-contact-input-box">
                                <label>Nom et Prénom : *</label>
                                <input
                                  type="text"
                                  name="premierResponsableLegal.nomPrenom"
                                  placeholder="Nom et Prénom"
                                  value={
                                    formData.premierResponsableLegal.nomPrenom
                                  }
                                  onChange={handleNestedChange}
                                />
                              </div>
                            </div>
                            <div className="col-12 mb-25">
                              <div className="it-contact-input-box">
                                <label>Nationalité : *</label>
                                <select
                                  name="premierResponsableLegal.nationalite"
                                  className="custom-dropdown"
                                  value={
                                    formData.premierResponsableLegal.nationalite
                                  }
                                  onChange={handleNestedChange}
                                >
                                  <option value="">Sélectionner</option>
                                  {nationalities.map((nationality, index) => (
                                    <option key={index} value={nationality}>
                                      {nationality}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="col-12 mb-25">
                              <div className="it-contact-input-box">
                                <label>Profession : *</label>
                                <input
                                  type="text"
                                  name="premierResponsableLegal.profession"
                                  placeholder="Profession"
                                  value={
                                    formData.premierResponsableLegal.profession
                                  }
                                  onChange={handleNestedChange}
                                />
                              </div>
                            </div>
                            <div className="col-12 mb-25">
                              <div className="it-contact-input-box">
                                <label>Téléphone 1 : *</label>
                                <input
                                  type="text"
                                  name="premierResponsableLegal.telephone1"
                                  placeholder="Téléphone"
                                  value={
                                    formData.premierResponsableLegal.telephone1
                                  }
                                  onChange={handleNestedChange}
                                />
                              </div>
                            </div>
                            <div className="col-12 mb-25">
                              <div className="it-contact-input-box">
                                <label>Email 1 : *</label>
                                <input
                                  type="text"
                                  name="premierResponsableLegal.email1"
                                  placeholder="Email"
                                  value={
                                    formData.premierResponsableLegal.email1
                                  }
                                  onChange={handleNestedChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="col-12 mb-25">
                          <div className="it-contact-input-box">
                            <label>Nom de l'élève : *</label>
                            <input
                              type="text"
                              name="nomEleve"
                              placeholder="Nom de l'élève"
                              value={formData.nomEleve}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12 mb-25">
                          <div className="it-contact-input-box">
                            <label>Date de naissance de l'élève : *</label>
                            <input
                              type="date"
                              name="dateNaissanceEleve"
                              value={formData.dateNaissanceEleve}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12 mb-25">
                          <div className="it-contact-input-box">
                            <label>Sexe de l'élève : * </label>
                            <select
                              name="sexeEleve"
                              className="custom-dropdown"
                              value={formData.sexeEleve}
                              onChange={handleChange}
                            >
                              <option value="">Sélectionner</option>
                              <option value="garçon">Garçon</option>
                              <option value="fille">Fille</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 mb-25">
                          <div className="it-contact-input-box">
                            <label>Santé</label>
                            <table
                              style={{
                                width: "100%",
                                borderCollapse: "collapse",
                              }}
                            >
                              <thead>
                                <tr>
                                  <th
                                    style={{
                                      borderBottom: "1px solid #ccc",
                                      padding: "50px",
                                    }}
                                  ></th>
                                  <th
                                    style={{
                                      borderBottom: "1px solid #ccc",
                                      padding: "12px",
                                    }}
                                  >
                                    Oui
                                  </th>
                                  <th
                                    style={{
                                      borderBottom: "1px solid #ccc",
                                      padding: "12px",
                                    }}
                                  >
                                    Non
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      borderBottom: "1px solid #ccc",
                                      padding: "10px",
                                    }}
                                  >
                                    Votre enfant éprouve-t-il / ou a t'il
                                    éprouvé des difficultés d'apprentissage ou
                                    de comportement ?
                                  </td>
                                  <td
                                    style={{
                                      borderBottom: "1px solid #ccc",
                                      padding: "10px",
                                      textAlign: "center",
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      name="sante.eprouveDifficultes"
                                      value="true"
                                      checked={
                                        formData.sante.eprouveDifficultes
                                      }
                                      onChange={handleNestedChange}
                                    />
                                  </td>
                                  <td
                                    style={{
                                      borderBottom: "1px solid #ccc",
                                      padding: "10px",
                                      textAlign: "center",
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      name="sante.eprouveDifficultes"
                                      value="false"
                                      checked={
                                        !formData.sante.eprouveDifficultes
                                      }
                                      onChange={handleNestedChange}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style={{
                                      borderBottom: "1px solid #ccc",
                                      padding: "10px",
                                    }}
                                  >
                                    Votre enfant souffre t-il d'une maladie
                                    chronique ?
                                  </td>
                                  <td
                                    style={{
                                      borderBottom: "1px solid #ccc",
                                      padding: "10px",
                                      textAlign: "center",
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      name="sante.maladieChronique"
                                      value="true"
                                      checked={formData.sante.maladieChronique}
                                      onChange={handleNestedChange}
                                    />
                                  </td>
                                  <td
                                    style={{
                                      borderBottom: "1px solid #ccc",
                                      padding: "10px",
                                      textAlign: "center",
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      name="sante.maladieChronique"
                                      value="false"
                                      checked={!formData.sante.maladieChronique}
                                      onChange={handleNestedChange}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ padding: "10px" }}>
                                    Votre enfant a t-il une allergie alimentaire
                                    ?
                                  </td>
                                  <td
                                    style={{
                                      padding: "10px",
                                      textAlign: "center",
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      name="sante.allergieAlimentaire"
                                      value="true"
                                      checked={
                                        formData.sante.allergieAlimentaire
                                      }
                                      onChange={handleNestedChange}
                                    />
                                  </td>
                                  <td
                                    style={{
                                      padding: "10px",
                                      textAlign: "center",
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      name="sante.allergieAlimentaire"
                                      value="false"
                                      checked={
                                        !formData.sante.allergieAlimentaire
                                      }
                                      onChange={handleNestedChange}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="col-12 mb-25">
                          <div className="it-contact-input-box">
                            <label>Niveau scolaire : {academicYear2}</label>

                            <select
                              name="niveauScolaire"
                              className="custom-dropdown"
                              value={formData.niveauScolaire}
                              onChange={handleChange}
                            >
                              <option value="">Sélectionner</option>
                              <option value="1ère">1ère</option>
                              <option value="2ème">2ème</option>
                              <option value="3ème">3ème</option>
                              <option value="4ème">4ème</option>
                              <option value="5ème">5ème</option>
                              <option value="6ème">6ème</option>
                              <option value="7ème">7ème</option>
                              <option value="8ème">8ème</option>
                              <option value="9ème">9ème</option>
                              <option value="10ème">10ème</option>
                              <option value="11ème">11ème</option>
                              <option value="12ème">12ème</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-12 mb-25">
                          <div>DEUXIÈME RESPONSABLE LÉGAL</div>
                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Nom et Prénom : *</label>
                              <input
                                type="text"
                                name="deuxiemeResponsableLegal.nomPrenom"
                                placeholder="Nom et Prénom"
                                value={
                                  formData.deuxiemeResponsableLegal.nomPrenom
                                }
                                onChange={handleNestedChange}
                              />
                            </div>
                          </div>
                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Nationalité : *</label>
                              <select
                                name="deuxiemeResponsableLegal.nationalite"
                                className="custom-dropdown"
                                value={
                                  formData.deuxiemeResponsableLegal.nationalite
                                }
                                onChange={handleNestedChange}
                              >
                                <option value="">Sélectionner</option>
                                {nationalities.map((nationality, index) => (
                                  <option key={index} value={nationality}>
                                    {nationality}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Profession : *</label>
                              <input
                                type="text"
                                name="deuxiemeResponsableLegal.profession"
                                placeholder="Profession"
                                value={
                                  formData.deuxiemeResponsableLegal.profession
                                }
                                onChange={handleNestedChange}
                              />
                            </div>
                          </div>
                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Téléphone 2: *</label>
                              <input
                                type="text"
                                name="deuxiemeResponsableLegal.telephone2"
                                placeholder="Téléphone"
                                value={
                                  formData.deuxiemeResponsableLegal.telephone2
                                }
                                onChange={handleNestedChange}
                              />
                            </div>
                          </div>
                          <div className="col-12 mb-25">
                            <div className="it-contact-input-box">
                              <label>Email 2 : *</label>
                              <input
                                type="text"
                                name="deuxiemeResponsableLegal.email2"
                                placeholder="Email"
                                value={formData.deuxiemeResponsableLegal.email2}
                                onChange={handleNestedChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label className="text-center">
                          Services * <br />
                          <small>
                            Panier obligatoire si allergie(s) alimentaire(s) *
                          </small>
                          <br />
                          <small>
                            Option(s) sous réserve de disponibilité.
                          </small>
                        </label>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              name="panier"
                              checked={formData.services.panier}
                              onChange={handleCheckboxChange}
                            />
                            Panier
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              name="cantine"
                              checked={formData.services.cantine}
                              onChange={handleCheckboxChange}
                            />
                            Cantine
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              name="garderie"
                              checked={formData.services.garderie}
                              onChange={handleCheckboxChange}
                            />
                            Garderie
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              name="busScolaire"
                              checked={formData.services.busScolaire}
                              onChange={handleCheckboxChange}
                            />
                            Bus Scolaire
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mb-25">
                      <div className="it-contact-input-box">
                        <label>Engagements *</label>
                        <p>
                          Veuillez SVP lire les conditions d'inscription et le
                          règlement intérieur de l'école et cocher les cases
                          pour confirmer votre demande.
                          <br />
                          Règlement Intérieur :{" "}
                          <a href="URL_TO_REGLEMENT_INTERIEUR" target="_blank">
                            Règlement intérieur
                          </a>{" "}
                          | Conditions d'inscription :{" "}
                          <a
                            href="URL_TO_CONDITIONS_INSCRIPTION"
                            target="_blank"
                          >
                            Conditions d'inscription
                          </a>
                        </p>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              name="exactitudeRenseignements"
                              checked={
                                formData.engagements.exactitudeRenseignements
                              }
                              onChange={handleEngagementsChange}
                              required
                            />
                            J'atteste l'exactitude des renseignements fournis et
                            je m'engage à mettre à jour ces données en cas de
                            changement(s).
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              name="connaissanceConditions"
                              checked={
                                formData.engagements.connaissanceConditions
                              }
                              onChange={handleEngagementsChange}
                              required
                            />
                            J'ai pris connaissance des conditions d'inscription
                            à l'ECIS.
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              name="connaissanceReglement"
                              checked={
                                formData.engagements.connaissanceReglement
                              }
                              onChange={handleEngagementsChange}
                              required
                            />
                            J’ai pris connaissance du règlement intérieur de
                            l’ECIS.
                          </label>
                        </div>
                        <div class="ed-header-button d-flex justify-content-end align-items-center">
                          <button
                            type="submit"
                            className="ed-btn-square radius purple-4"
                          >
                            <span>Soumettre</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default ContactMain;
