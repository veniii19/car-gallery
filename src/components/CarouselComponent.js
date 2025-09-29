import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x400?text=Luxury+Car+Decoration"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Luxury Car Decoration</h3>
          <p>Make your car stand out with our premium designs</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x400?text=Wedding+Car+Decoration"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Wedding Car Decoration</h3>
          <p>Perfect styling for your big day</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
