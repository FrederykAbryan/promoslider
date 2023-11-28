import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const images = [
    "img/Program1.jpeg",
    "img/Program2.jpeg",
    "img/Program3.jpeg",
    "img/Program4.jpeg",
  ];
const Program = () => {
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

export default Program