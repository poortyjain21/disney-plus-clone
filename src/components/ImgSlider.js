import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="../images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="../images/slider-badag.jpg" />
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin-top: 20px;
  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }

  .slick-dots li button::before {
    font-size: 8;
    color: rgb(150, 158, 171);
    // color: #fff;
    // opacity: 0.7;
  }

  .slick-dots li.slick-active button::before {
    // color: #fff;
    color: white;

    // opacity: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 4px solid transparent;
    box-shadow: rgb(0 0 0 / 69) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
      border: 4px solid rgb(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
