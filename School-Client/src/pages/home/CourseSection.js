import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SectionTitleSpecial from "../../components/SectionTitle/SectionTitleSpecial";
import SingleCourse from "../../components/Course";
import RightArrow from "../../components/SVG";
import courseBG from "../../assets/img/course/ed-bg-1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Function to format the date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Course = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://io.trustensia.com/api/news");
        setNews(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!news.length) {
    return <div>Aucune actualité disponible pour le moment.</div>;
  }

  // Slick carousel settings (without arrows)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 slides at once
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="it-course"
      className="it-course-area ed-course-bg ed-course-style-3 p-relative pt-120 pb-90"
      style={{ backgroundImage: `url(${courseBG})` }}
    >
      <style>{`
        .news-carousel-item {
          padding: 2px; /* Add some padding to the items */
        }
      `}</style>
      
      <div className="container">
        <div className="ed-course-title-wrap mb-65">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8 col-md-7">
              <SectionTitleSpecial
                itemClass="it-course-title-box mb-70 section-title-fixed-width"
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
        <Slider {...settings}>
          {news.map((newsItem) => (
            <div key={newsItem._id} className="news-carousel-item">
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
        </Slider>
      </div>
    </div>
  );
};

export default Course;
