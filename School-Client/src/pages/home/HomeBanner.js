import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import RightArrow from "../../components/SVG";
import bannerBG from "../../assets/img/slider/slider-bg.png";
import instructorImg from "../../assets/img/slider/instructor.png";
import shapeImg2 from "../../assets/img/slider/shape-1-2.png";
// Import the video
import acadieVideo from "../../assets/img/slider/acadie.mp4";

const HomeBanner = () => {
  return (
    <div className="ed-slider-area p-relative">
      <div
        className="ed-slider-bg p-relative"
        style={{ backgroundImage: `url(${bannerBG})` }}
      >
        <div className="ed-slider-instructor-box d-none d-lg-block">
          <div>
            <span style={{ fontSize: "26px" }}>
              Diplôme du ministère de <i>l'Ontario</i>
            </span>
          </div>
        </div>
        <div className="ed-slider-shape-2 d-none d-xl-block">
          <img src={shapeImg2} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-6">
              <div className="ed-slider-content">
                <span
                  className="ed-slider-subtitle pb-10 wow animate__fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  À l’école Canadienne Internationale de Sousse,
                </span>
                <h1
                  className="ed-slider-title wow animate__fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".4s"
                >
                  nous croyons <br />
                  au plaisir <span>d’apprendre</span>
                </h1>
                <p
                  className="pb-25 wow animate__fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  dans un environnement qui le bien-être et la réussite de
                  chaque enfant !<br />
                </p>
                <Link
                  className="ed-btn-dark wow animate__fadeInUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                  to="/contacter-nous"
                >
                  Contact
                  <i>
                    <RightArrow />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="ed-slider-thumb">
          <ReactPlayer
            url={acadieVideo}
            playing
            loop
            width="100%"
            height="100%"
            controls={false}
          />
          <div className="ed-slider-shape-1 d-none d-xl-block"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
