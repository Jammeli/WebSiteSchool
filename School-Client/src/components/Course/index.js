import React from "react";
import { Link } from "react-router-dom";

import Image from "../../assets/img/course/course-2-1.jpg";
import shapeImg from "../../assets/img/course/ed-item-shape.png";
import RightArrowThin from "../SVG/RightArrowThin";

const SingleCourse = (props) => {
  const {
    itemClass,
    courseImage,
    thumbText,
    title,
    duration,
    btnText,
    id, // Make sure to pass the ID prop explicitly if necessary
  } = props;

  if (!id) {
    // Return nothing or a placeholder if the ID is not passed
    return null;
  }

  return (
    <div className={itemClass ? itemClass : "it-course-item ed-course-style-2"}>
      <div className="it-course-thumb mb-25 p-relative">
        <Link to={`/course-details/${id}`}>
          <img
            src={courseImage ? courseImage : Image}
            alt=""
            style={{ width: "400px", height: "300px", objectFit: "cover" }}
          />
        </Link>
        <div className="it-course-thumb-text">
          <span>
            <i
              className="fa-sharp fa-regular fa-clock"
              style={{ "margin-right": "4px" }}
            ></i>

            {duration ? duration : "19h 30m"}
          </span>
        </div>
      </div>
      <div className="it-course-content p-relative">
        <h4 className="it-course-title pb-15">
          <Link to={`/course-details/${id}`}>
            {title ? title : "It Statistics Data Science And Business Analysis"}
          </Link>
        </h4>

        <div className="d-flex justify-content-between align-items-center">
          <div className="it-course-author"></div>
          <div className="ed-course-price-box">
            <Link className="ed-course-btn" to={`/course-details/${id}`}>
              {btnText ? btnText : "Voir plus"}
              <span>
                <RightArrowThin />
              </span>
            </Link>
          </div>
        </div>
        <div className="ed-course-shape">
          <img src={shapeImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
