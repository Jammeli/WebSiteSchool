import React, { useState, useEffect } from "react";
import Side_Bar from "./Side_Bar";
import Top_Nav from "./Top_Nav";
import Notice from "./Notice";
import { jwtDecode } from "jwt-decode";

function Dashboard() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decode = jwtDecode(token);
        console.log(decode);
        console.log(decode.email);
        setEmail(decode.email);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      console.error("Token is not available in localStorage.");
    }
  }, []);

  return (
    <div id="wrapper" className="wrapper bg-ash">
      <Top_Nav email={email} />
      <div className="dashboard-page-one">
        <Side_Bar />
        <div className="dashboard-content-one">
          <div className="breadcrumbs-area"></div>
          <img src="img/Logo_ECIS.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
