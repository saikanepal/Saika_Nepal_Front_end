import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Laptop from '../../assets/laptop.jpg';

const CustomSlider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000, // Adjust autoplay speed in milliseconds
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default CustomSlider;
