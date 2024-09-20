import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API calls
import Breadcrumb from "../../components/Breadcrumb";
import courseImg from "../../assets/img/event/details-1.jpg"; // Default image if needed
import FooterTwo from "../../components/Footer/FooterTwo"; // Footer import
import Header from "../../components/Header"; // Header import
import Logo from "../../assets/img/logo/logo-white-2.png"; // Footer logo

const CalendrierScolaire = () => {
  // State to hold the fetched details
  const [calendrierScolaireDetails, setCalendrierScolaireDetails] =
    useState(null);

  // Fetch the details on component mount
  useEffect(() => {
    const fetchCalendrierScolaireDetails = async () => {
      try {
        const response = await axios.get(
          `https://io.trustensia.com/api/calendrier-scolaire`
        ); // Replace with your API endpoint
        setCalendrierScolaireDetails(response.data[0]); // Assuming you want the first entry
      } catch (error) {
        console.error("Error fetching calendrier scolaire details:", error);
      }
    };

    fetchCalendrierScolaireDetails(); // Call the function to fetch data
  }, []); // Run only once on mount

  // Show loading state while data is being fetched
  if (!calendrierScolaireDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />

      <main>
        <Breadcrumb
          title="Calendrier Scolaire"
          subTitle="Détails du calendrier"
        />

        <div className="it-course-details-area pt-120 pb-100 text-center">
          <h4 className="it-evn-details-title mb-0 pb-5">
            Niveau: {calendrierScolaireDetails.niveau}{" "}
            {/* Display the niveau */}
          </h4>

          <div className="postbox__meta text-center">
            <span>
              Année scolaire: {calendrierScolaireDetails.anneeScolaire}{" "}
              {/* Display the school year */}
            </span>
          </div>
          <div className="container">
            <div className="row">
              <div className="">
                <div className="it-course-details-wrap">
                  <div className="it-evn-details-thumb mb-35">
                    <img
                      src={calendrierScolaireDetails.emploiDeTemps || courseImg}
                      alt={calendrierScolaireDetails.niveau}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterTwo
        footerClass="it-footer-area it-footer-bg it-footer-style-5 ed-footer-style-5 inner-style black-bg pb-70"
        footerLogo={Logo}
        btnClass="it-btn-white sky-bg"
        copyrightTextClass="it-copyright-text inner-style text-center"
      />
    </>
  );
};

export default CalendrierScolaire;
