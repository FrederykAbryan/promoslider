import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./App.css";

// const images = [
//   "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
//   "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
//   "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
//   "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
// ];

const images = [
  promo1,
  promo2,
  promo3,
  promo4,
  promo5,
  promo6,
  promo7,
  promo8,
  promo9,
  promo10,
  promo11,
];

function App() {
  const [details, setDetails] = useState(null);

  const [sliderRef] = useKeenSlider({
    loop: true,
    detailsChanged(s) {
      setDetails(s.track.details);
    },
    initial: 2,
  });
  function scaleStyle(idx) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }
  return (
    <>
      <div style={{ maxHeight: "100%", maxWidth: "800px" }}>
        <div
          ref={sliderRef}
          className="keen-slider zoom-out"
          style={{ height: "100%", maxWidth: "100%" }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="keen-slider__slide zoom-out__slide">
              <div style={scaleStyle(idx)}>
                <img
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    marginTop: "100px",
                  }}
                  src={src}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
