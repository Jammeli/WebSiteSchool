import axios from "axios";
import React, { useEffect, useState } from "react";
import RowDetailsFees from "./RowDetailsFees";
import { Link } from "react-router-dom";
function Array_Fees() {
  const [fees, setFees] = useState([]);
  useEffect(() => {
    axios
      .get("https://io.trustensia.com/api/frais")
      .then((response) => setFees(response.data)) // Access the data property
      .catch((error) => console.error("Error fetching fees:", error)); // Optional: handle error
  }, []);
  return (
    <div class="card height-auto">
      <div class="card-body">
        <form class="mg-b-20">
          <div class="row gutters-8">
            <div class="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group">
              <Link
                to="/version1/create_fees"
                className="fw-btn-fill btn-gradient-yellow"
              >
                Ajouter frais scolaire
              </Link>
            </div>
          </div>
        </form>
        <div class="table-responsive">
          <table class="table display data-table text-nowrap">
            <thead>
              <tr>
                <th>Niveau</th>
                <th>Année Scolaire</th>
                <th>Montant Mensuel</th>
                <th>Frais de dossier</th>
                <th>Frais de réinscription</th>
                <th>Frais de 1ère inscription</th>
                <th>Service vie scolaire</th>
                <th>Panier</th>
                <th>Cantine</th>
                <th>Garderie</th>
                <th>Bus Scolaire</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {fees.map(
                ({
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
                }) => (
                  <RowDetailsFees
                    key={_id}
                    _id={_id}
                    niveau={niveau}
                    anneeScolaire={anneeScolaire}
                    montantMensuelle={montantMensuelle}
                    fraisDossier={fraisDossier}
                    fraisReinscription={fraisReinscription}
                    fraisPremiereInscription={fraisPremiereInscription}
                    serviceVieScolaire={serviceVieScolaire}
                    panier={panier}
                    cantine={cantine}
                    garderie={garderie}
                    busScolaire={busScolaire}
                    option={option}
                  />
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Array_Fees;
