import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Committee } from "./committee";

export const GeneralMembers = () => {
  return (
    <div className="container overflow-hidden px-6 mt-6 mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Abdullah Al Asif Akondo"
            url="assets/image/tuli.jpg"
            pod="Vice president"
            fb="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Billal Hossain"
            pod="Vice President"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Al-amin Shadik Sayem"
            pod="Vice President"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Asif Mahmud"
            pod="Vice President"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Billal Hossain"
            pod="Vice President"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Galiba Ibnat"
            pod="Vice President"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Gazi Azam Hossan"
            pod="Vice President"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Imratul Jannat Usha"
            pod="Vice President"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Juthi Rani"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Mahafuzar Rahman Rifat"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Maheda Taiyeba"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD Abul Khayer Jayed"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD Hridoy"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Md Juwel Rana"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Md Siddikur Rahman"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Md. Masudur Rahaman Masud"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Nimmi Akhter"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Reny Akter"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Robayed Zahin"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Saidur Rahman Drubo"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="জুয়েল হক"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Rishad Nur"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
