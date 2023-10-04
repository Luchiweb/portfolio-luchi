import SkillCard from "./SkillCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { iconNames } from "../../helpers/iconsNames";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

function Stack() {
  return (
    <div className=" bg-secondary-color py-10">
      <div className="container flex-col gap-10">
        <h2>My Stack</h2>
        <div className="container">
          <Swiper
            className="stack-slider"
            spaceBetween={20}
            slidesPerView={6}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true, dynamicBullets: true }}
          >
            {iconNames.map((iconName) => (
              <SwiperSlide key={iconName}>
                <SkillCard imgPath={iconName} name={iconName.split(".")[0]} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default Stack;
