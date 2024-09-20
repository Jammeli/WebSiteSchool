import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";
import SingleTestimonial from "../../components/Testimonial";

import testimonialBG from "../../assets/img/testimonial/testimonial-bg.jpg";

const Testimonial = () => {
  const sliderOption = {
    speed: 1500,
    loop: true,
    slidesPerView: "3",
    spaceBetween: 50,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div
      className="it-testimonial-area ed-testimonial-ptb fix p-relative"
      style={{ backgroundImage: `url(${testimonialBG})` }}
    >
      <div className="container">
        <div className="it-testimonial-title-wrap mb-90">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <SectionTitle
                itemClass="it-testimonial-title-box text-center"
                subTitle="testimonial"
                title="Nos valeurs"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ed-testimonial-wrapper">
              <div className="swiper-container">
                <Swiper
                  modules={[Autoplay]}
                  {...sliderOption}
                  className="swiper-wrapper ed-testimonial-active"
                >
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonial
                      description={`“S’engager à apprendre, à grandir et à contribuer positivement à notre communauté scolaire.”`}
                      authorName="Engagement"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonial
                      description={`“Développer et entretenir des relations harmonieuses au sein de notre communauté scolaire.”`}
                      authorName="Respect"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonial
                      description={`“Encourager un engagement actif envers le bien-être et la cohésion de la communauté scolaire.”`}
                      authorName="Responsabilité"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <SingleTestimonial
                      authorName="Excellence scolaire"
                      description={`“Appliquer les exigences les plus élevées pour la réussite de nos élèves.”`}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
