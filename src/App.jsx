import promo1 from "/img/promo1.jpeg";
import promo2 from "/img/promo2.jpeg";
import promo3 from "/img/promo3.jpeg";
import promo4 from "/img/promo4.jpeg";
import promo5 from "/img/promo5.jpeg";
import promo6 from "/img/promo6.jpeg";
import promo7 from "/img/promo7.jpeg";
import promo8 from "/img/promo8.jpeg";
import promo9 from "/img/promo9.jpeg";
import promo10 from "/img/promo10.jpeg";
import promo11 from "/img/promo11.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import "./App.css";

// const images = [
//   "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
//   "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
//   "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
//   "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
// ];

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

function App() {
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

export default App;
