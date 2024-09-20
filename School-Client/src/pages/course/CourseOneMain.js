import React, { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumb";
import SectionTitleSpecial from "../../components/SectionTitle/SectionTitleSpecial";
import SingleCourse from "../../components/Course";
import courseBG from "../../assets/img/course/ed-bg-1.jpg";

// Function to format the date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const CourseOneMain = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://io.trustensia.com/api/news");
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <main>
      <Breadcrumb title="Actualités" subTitle="Actualités" />

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
                  preTitle="ECIS"
                  highlightText=" actualités"
                />
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
                  courseImage={newsItem.image}
                  thumbText={newsItem.title}
                  title={newsItem.title}
                  description={newsItem.description}
                  duration={formatDate(newsItem.datetime)}
                  id={newsItem._id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseOneMain;
