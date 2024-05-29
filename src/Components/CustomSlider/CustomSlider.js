import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Laptop from '../../assets/laptop.jpg';
import NextArrow from "./NextArrow";

const CustomSlider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // nextArrow:<button type='button' class='slick-prev pull-left'>Hi</button>,
    // prevArrow:<NextArrow/>,
    autoplaySpeed: 10000, // Adjust autoplay speed in milliseconds
    fade: true, // Use fade animation
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)", // Set the CSS easing effect
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default CustomSlider;
