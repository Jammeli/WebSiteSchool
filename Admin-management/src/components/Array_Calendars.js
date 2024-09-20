import React, { useEffect, useState } from "react";
import axios from "axios";
import RowDetails from "./RowDetails";
function Array_Calendars() {
  const [calendriers, setCalendriers] = useState([]);
  useEffect(() => {
    axios
      .get("https://io.trustensia.com/api/calendrier-scolaire")
      .then((response) => setCalendriers(response.data)) // Access the data property
      .catch((error) => console.error("Error fetching calendars:", error)); // Optional: handle error
  }, []);
  return (
    <div class="col-8-xxxl col-12">
      <div class="card height-auto">
        <div class="card-body">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>Calendriers Scolaires</h3>
            </div>
          </div>

          <div class="table-responsive">
            <table class="table display data-table text-nowrap">
              <thead>
                <tr>
                  <th>Année Scolaire</th>
                  <th>Niveau</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {calendriers.map(
                  ({ _id, anneeScolaire, niveau, emploiDeTemps }) => (
                    <RowDetails
                      key={_id}
                      _id={_id}
                      anneeScolaire={anneeScolaire}
                      niveau={niveau}
                      emploiDeTemps={emploiDeTemps}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Array_Calendars;
