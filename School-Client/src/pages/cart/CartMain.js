import React from "react";

import Breadcrumb from "../../components/Breadcrumb";

const CartMain = () => {
  return (
    <main>
      <Breadcrumb title="Horaire de la journée" subTitle="Horaire de la journée" />
      <section className="cart-area">
        <div className="container">
          <div className="">
            <div className="col-12 ">
              <div className="cart-page-total">
                <h2 className="text-center"  style={{ color: "red" }}>Horaire de la journée</h2>
                <ul className="mb-20">
                  <li>
                    Arrivée à l’école et rentrée en classe{" "}
                    <span><strong>8 h 30 à 8 h 35</strong></span>
                  </li>
                  <li>
                    Enseignement <span><strong>8 h 35 à 9 h 20 / 9 h 20 à 10 h 05</strong></span>
                  </li>
                  <li>
                    Récréation <span><strong>10 h 05 à 10 h 20</strong></span>
                  </li>
                  <li>
                    Retour en classe <span><strong>10 h 20 à 10 h 25</strong></span>
                  </li>
                  <li>
                    Enseignement{" "}
                    <span><strong>10 h 25 à 11 h 10 / 11 h 10 à 11 h 55</strong></span>
                  </li>
                  <li>
                    Déjeuner <span><strong>11 h 55 à 12 h 35</strong></span>
                  </li>
                  <li>
                    Retour en classe <span><strong>12 h 35 à 12 h 40</strong></span>
                  </li>
                  <li>
                    Enseignement{" "}
                    <span><strong>12 h 40 à 13 h 25 / 13 h 25 à 14 h 10</strong></span>
                  </li>
                  <li>
                    Récréation <span><strong>14 h 10 à 14 h 25</strong></span>
                  </li>
                  <li>
                    Retour en classe<span><strong>14 h 25 à 14 h 30</strong></span>
                  </li>
                  <li>
                    Enseignement{" "}
                    <span><strong>14 h 30 à 15 h 10 / 15 h 10 à 16 h 10</strong></span>
                  </li>
                  <li>
                    Préparation aux clubs <span><strong>16 h 00 à 16 h 05</strong></span>
                  </li>
                  <li>
                    Clubs <span><strong>16 h 05 à 16 h 50</strong></span>
                  </li>
                  <li>
                    Départ des élèves participant aux clubs <span><strong>16 h 50</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default CartMain;
