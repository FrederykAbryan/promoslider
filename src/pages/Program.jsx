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
          <div className="container d-flex justify-content-center container-fluid" style={{ maxWidth: "100vh"}}>
            <div className="row">
              <div
                className="d-flex col col-12 overflow-auto"
                style={{ maxWidth: "45rem", minWidth: "40vh" }}
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
                            className="vh-auto img-fluid"
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