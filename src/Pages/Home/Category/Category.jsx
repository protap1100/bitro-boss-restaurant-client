import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="my-5">
      <div>
        <SectionTitle heading={'---From 11:00am to 10:00pm---'} subHeading={'ORDER ONLINE'} >
              
        </SectionTitle>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="absolute" />
          <h1 className="text-4xl uppercase text-center relative top-80  text-white ">Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="absolute" />
          <h1 className="text-4xl uppercase text-center relative top-80 text-white ">Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="absolute"/>
          <h1 className="text-4xl uppercase text-center relative top-80 text-white ">Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h1 className="text-4xl uppercase text-center text-white ">Desert</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
