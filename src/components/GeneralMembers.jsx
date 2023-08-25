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
            name="Abdul Khalek"
            pod="Vice President(Debate)"
            fb="#"
            url="assets/image/Khalek.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Billal Hossain"
            url="assets/image/billal.jpg"
            pod="Vice President(Admin)"
            fb="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Jannatunnahar Tuli"
            pod="Vice President(Admin)"
            fb="#"
            url="assets/image/tuli.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Md Faruk Hosen"
            pod="Vice President(Debate)"
            fb="#"
            url="assets/image/faruk.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Juthy Rani"
            pod="Joint General Secretary"
            fb="#"
            url="assets/image/juthy.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Robayed Hasan"
            pod="Organising Secretary"
            fb="#"
            url="assets/image/robayed.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MSR Siddik"
            pod="Organising Secretary"
            fb="#"
            url="assets/image/siddik.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Reny Akter"
            pod="Workshop and Reading circle Secreatary (english)"
            fb="#"
            url="assets/image/reny.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Masudur Rahman"
            pod="IT Secretary"
            fb="#"
            url="assets/image/masud.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Mahfuzar Rahman Refat"
            pod="Workshop and Reading circle Secreatary (english)"
            fb="#"
            url="assets/image/rifat.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Imratul Jannat usa"
            pod="Publicity Secretary"
            fb="#"
            url="assets/image/usa.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Abul Khayer Jayed"
            pod="Office Secretary"
            fb="#"
            url="assets/image/jayed.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Galiba Ibnat"
            pod="Treasurer"
            fb="#"
            url="assets/image/galiba.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Gazi Azam"
            pod="Debate Research Secretary"
            fb="#"
            url="assets/image/gazi.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Al-Amin Sadik Sayem"
            pod="Campus Affairs Secretary"
            fb="#"
            url="assets/image/sayem.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Asif Mahmud"
            pod="Cultural Secretary"
            fb="#"
            url="assets/image/asif.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Nimmi Akter"
            pod="Women affairs Secretary"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Juwel Haque"
            pod="Workshop and Reading Circle Secretary"
            fb="#"
            url="assets/image/juwel.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Abdullah akondo"
            pod="Human Welfare Secretary"
            fb="#"
            url="assets/image/akondo.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="MD. Polash"
            pod="Associate IT Secretary"
            fb="#"
            url="assets/image/polash.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Maheda Taiyeba"
            pod="Chief of English Wing"
            fb="#"
            url="assets/image/Maheda Taiyeba.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Abdur Rahman"
            pod="Chief of English Wing"
            fb="#"
            url="assets/image/unman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Md Mustansir Muyaj"
            pod="Assistant office Secretary"
            fb="#"
            url="assets/image/unman.png"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Committee
            name="Umme Habiba Usha"
            pod="Assistant office Secretary"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Sabera binte Muhtarizh"
            pod="Assistant Treasurer"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Khadimul Sarder"
            pod="Assistant Treasurer"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Shayma akhter"
            pod="Assistant Treasurer"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Sadia Tahsin Shuchi"
            pod="Assistant Campus Afiiairs Secretary"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Humayun Kabir"
            pod="Assistant Campus Afiiairs Secretary"
            fb="#"
            url="assets/image/unman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Abrar Samin"
            pod="Assistant Cultural Secretary"
            fb="#"
            url="assets/image/unman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Jibon Kumar Roy"
            pod="Assistant Debate Secretary"
            fb="#"
            url="assets/image/unman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Isfakun Nisa"
            pod="Assistant Debate Secretary"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Airin Nahar"
            pod="Assistant Debate Secretary"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Fakihatul Rumpa"
            pod="Assistant women affairs Secretary"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Md Moshiur Rahman"
            pod="Ast. Workshop and Reading Circle Secretary(Bangla)"
            fb="#"
            url="assets/image/unman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Pritam Deb Nath"
            pod="Assistant Publicity Secretary"
            fb="#"
            url="assets/image/unman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Golam Rahman Shaon"
            pod="Assistant Publicity Secretary"
            fb="#"
            url="assets/image/unman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Kayeem Uddin"
            pod="Assistant Publicity Secretary"
            fb="#"
            url="assets/image/unman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Sathy Sarker"
            pod="Assistant Human Welfare Secretary"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Shimanto Chakroborty"
            pod="Assistant IT Secretary "
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Mahfuzur Rahman Siam"
            pod="Assistant of English Wing"
            fb="#"
            url="assets/image/unman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Moriom Akter"
            pod="Assistant of English Wing"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Mahfuz Alam Oni"
            pod="Assistant of English Wing"
            fb="#"
            url="assets/image/unman.png"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Committee
            name="Oyshee Rahman"
            pod="Assistant of English Wing"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Zarin Tabassum Prapti"
            pod="Assistant of English Wing"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Committee
            name="Zeon Hossain"
            pod="Assistant Human Welfare secreatary"
            fb="#"
            url="assets/image/unwoman.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
