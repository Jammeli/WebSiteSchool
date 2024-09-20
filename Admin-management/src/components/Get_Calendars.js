import React, { useEffect, useState } from "react";
import Add_New_Calendar from "./Add_New_Calendar";
import Array_Calendars from "./Array_Calendars";
import Side_Bar from "./Side_Bar";
import Top_Nav from "./Top_Nav";
import { jwtDecode } from "jwt-decode";
function Get_Calendars() {
  const [email, setEmail] = useState(""); // Stocke l'email décodé du token

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
  return (
    <div id="wrapper" className="wrapper bg-ash">
      <Top_Nav email={email} />
      <div className="dashboard-page-one">
        <Side_Bar />
        <div className="dashboard-content-one">
          <div className="breadcrumbs-area ">
            <h3>Calendrier Scolaire</h3>
          </div>
          <div className="row">
            <Add_New_Calendar />
            <Array_Calendars />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Get_Calendars;
