import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for API calls
import SectionTitleSpecial from "../../components/SectionTitle/SectionTitleSpecial";
import SingleCourse from "../../components/Course";
import RightArrow from "../../components/SVG";
import courseBG from "../../assets/img/course/ed-bg-1.jpg"; // Background image

// Function to format the date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Course = () => {
  const [news, setNews] = useState([]); // State to store news
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch news from backend API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://io.trustensia.com/api/news");
        console.log("API Response:", response.data); // Log API response
        setNews(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // If no news found, display a message
  if (!news.length) {
    return <div>Aucune actualité disponible pour le moment.</div>;
  }

  return (
    <div
      id="it-course"
      className="it-course-area ed-course-bg ed-course-style-3 p-relative pt-120 pb-90"
      style={{ backgroundImage: `url(${courseBG})` }}
    >
      <div className="container">
        <div className="ed-course-title-wrap mb-65">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8 col-md-7">
              <SectionTitleSpecial
                itemClass="it-course-title-boxmb-70 section-title-fixed-width"
                subTitle="Actualités"
                preTitle="L'École Canadienne Internationale de Sousse dévoile ses dernières "
                highlightText="actualités."
                postTitle=""
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5">
              <div className="ed-course-button text-md-end">
                <Link className="ed-btn-theme" to="/course-1">
                  voir plus d'actualités
                  <i>
                    <RightArrow />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Loop through the news data */}
          {news.map((newsItem) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6 mb-30"
              key={newsItem._id}
            >
              <SingleCourse
                courseImage={newsItem.image} // Display news image
                thumbText={newsItem.title} // Display title
                title={newsItem.title} // Display title again if needed
                description={newsItem.description} // Display description
                duration={formatDate(newsItem.datetime)} // Format and display datetime as duration
                id={newsItem._id} // Pass the ID explicitly to the SingleCourse component
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
