import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const images = [
    "img/promo1.jpeg",
    "img/promo2.jpeg",
    "img/promo3.jpeg",
    "img/promo4.jpeg",
    "img/promo5.jpeg",
    "img/promo6.jpeg",
    "img/promo7.jpeg",
    "img/promo8.jpeg",
    "img/promo9.jpeg",
    "img/promo10.jpeg",
    "img/promo11.jpeg",
  ];
const Promo = () => {
    return (
        <>
          <div className="container-fluid" style={{ maxWidth: "100vh" }}>
            <div className="row">
              <div
                className="d-flex col col-lg-12 overflow-auto"
                style={{ maxWidth: "92rem" }}
              >
                <Swiper
                  rewind={true}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                  freeMode
                  centeredSlides
                  grabCursor
                  centeredSlidesBounds
                  // modules={[FreeMode, Scrollbar]}
                >
                  {images?.map((val) => {
                    return (
                      <div key={val + 2}>
                        <SwiperSlide key={val}>
                          <img
                            className="vh-auto"
                            src={val}
                            style={{ width: "100%"}}
                          />
                        </SwiperSlide>
                      </div>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </>
      );
}

export default Promo