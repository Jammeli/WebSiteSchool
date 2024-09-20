import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import axios for API calls
import Breadcrumb from "../../components/Breadcrumb";
import courseImg from "../../assets/img/event/details-1.jpg"; // Default image if needed

const CourseDetailsMain = () => {
  const { id } = useParams(); // Get the news ID from URL parameters
  const [newsDetails, setNewsDetails] = useState(null); // State to store news details

  // Fetch the news details by ID
  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const response = await axios.get(
          `https://io.trustensia.com/api/news/${id}`
        ); // Replace with your API endpoint
        setNewsDetails(response.data);
      } catch (error) {
        console.error("Error fetching news details:", error);
      }
    };

    fetchNewsDetails(); // Fetch news details on component mount
  }, [id]); // Refetch when the ID changes

  if (!newsDetails) {
    return <div>Loading...</div>; // Loading state while data is being fetched
  }

  return (
    <main>
      <Breadcrumb title="détails d'actualité" subTitle="détails d'actualité" />

      <div className="it-course-details-area pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="">
              <div className="it-course-details-wrap">
                <div className="it-evn-details-thumb mb-35">
                  <img
                    src={newsDetails.image || courseImg}
                    alt={newsDetails.title}
                  />{" "}
                  {/* Use fetched image or default */}
                </div>

                <h4 className="it-evn-details-title mb-0 pb-5">
                  {newsDetails.title} {/* Display the news title */}
                </h4>
                <div className="postbox__meta">
                  <span>
                    <i className="fa-light fa-clock"></i>
                    {new Date(newsDetails.datetime).toLocaleDateString()}{" "}
                    {/* Format and display date */}
                  </span>
                </div>

                <div className="it-course-details-content">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="it-course-details-wrapper">
                      <div className="it-evn-details-text mb-40">
                        <h6 className="it-evn-details-title-sm pb-5">
                          Description
                        </h6>
                        <p>
                          {newsDetails.description}{" "}
                          {/* Display the news description */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseDetailsMain;
