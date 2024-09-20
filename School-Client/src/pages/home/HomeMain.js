import React from "react";
import Category from "./CategorySection";
import Course from "./CourseSection";
import FunFact from "./FunFactSection";
import HomeBanner from "./HomeBanner";
import Testimonial from "./TestimonialSection";

const HomeMain = () => {
  return (
    <main>
      <HomeBanner />
      <Category />
      <Course />
      <FunFact />
      <Testimonial />
    </main>
  );
};
export default HomeMain;
