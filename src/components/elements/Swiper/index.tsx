"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import CardMenu from "../Card-Menu";

const SwiperMobile = () => {
  return (
    <>
      <div className=" flex w-full items-center px-1">
        <Swiper pagination={{ dynamicBullets: true }} modules={[Pagination]}>
          <div className="">
            <SwiperSlide className="pt-32 ">
              <CardMenu src="/minuman-1.png" />
            </SwiperSlide>
            <SwiperSlide className=" pt-32">
              <CardMenu src="/minuman-1.png" />
            </SwiperSlide>
            <SwiperSlide className=" pt-32">
              <CardMenu src="/minuman-1.png" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperMobile;
