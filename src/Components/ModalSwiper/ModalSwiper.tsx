import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./modalSwiper.scss";

const ModalSwiper = ({ images }) => {
  //   console.log(images[0]);
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={images[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[3]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ModalSwiper;
