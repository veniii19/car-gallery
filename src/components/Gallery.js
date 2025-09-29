import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Gallery() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const slides = [
    "/images/BMW-Bridal-car-1000x1000.jpg",
    "/images/f0f1c1e69b29e254b7f063895413a7c9 (1).jpg",
    "/images/6 car.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const cars = [
    {
      title: "BMW Bridal Car",
      description: "Elegant BMW makeover with custom interiors and premium finishes.",
      before: "/images/bmw before.jpg",
      after: "/images/BMW-Bridal-car-1000x1000.jpg",
      price: "₹15,00,000",
      details:
        "Elegant BMW makeover with custom interiors, premium paint finish, and polished alloy wheels.",
    },
    {
      title: "Audi A6",
      description: "Sleek Audi A6 with glossy chrome accents and luxury interiors..",
      before: "/images/audi a6 before.jpg",
      after: "/images/f0f1c1e69b29e254b7f063895413a7c9 (1).jpg",
      price: "₹12,80,000",
      details:
        "Audi with glossy chrome detailing, luxury leather seats, and advanced infotainment system.",
    },
    {
      title: "Mercedes C-Class",
      description: "Sporty Mercedes C-Class with AMG styling and premium detailing.",
      before: "/images/mercedes before.jpg",
      after: "/images/mer.webp",
      price: "₹18,40,000",
      details:
        "Sporty AMG edition Mercedes with turbocharged performance, carbon fiber trims, and stylish LED lights.",
    },
    {
      title: "Audi A4",
      description: "Stylish Audi A4 with polished finish and refined interior touches.",
      before: "/images/audi a4 befor.jpg",
      after: "/images/1739280742610.webp",
      price: "₹11,50,000",
      details:
        "Audi A4 with glossy paint finish, chrome detailing, and luxury interior touches.",
    },
    {
      title: "Maruti S-Cross",
      description:  "High-end Sedan with full-body polish and luxurious upgrades.",
      before: "/images/s cross before.jpg",
      after: "/images/s cross.jpg",
      price: "₹9,20,000",
      details:
        "S-Cross upgraded with custom alloy wheels, roof wraps, and premium detailing.",
    },
    {
      title: "Luxury Sedan 6",
      description: "High-end customization for elegance.",
      before: "/images/6 before.jpg",
      after: "/images/6 car.jpg",
      price: "₹20,00,000",
      details:
        "Luxury Sedan with full body polish, interior upgrades, and premium exterior detailing.",
    },
  ];

  const textColor = "#9b59b6"; // Soft Lilac
  const buttonColor = "#8A2BE2"; // BlueViolet
  const modalGradient = `linear-gradient(90deg, ${textColor}, ${buttonColor})`;

  return (
    <div className="container my-5">
      {/* Banner */}
      <div className="text-center mb-4">
        <h1 className="fw-bold" style={{ color: textColor }}>
          🚗 Car Decoration Gallery
        </h1>
        <p className="lead" style={{ color: textColor }}>
          Luxury makeovers and custom designs for your car
        </p>
      </div>

      {/* Carousel */}
      <div className="mb-5 shadow-lg rounded-3 overflow-hidden">
        <img
          src={slides[carouselIndex]}
          alt="Sliding Slide"
          className="w-100"
          style={{
            height: "350px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Gallery */}
      <h2 className="text-center fw-bold mb-4" style={{ color: textColor }}>
        🚗 Our Car Gallery
      </h2>
      <div className="row g-4">
        {cars.map((car, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-lg h-100 rounded-3">
              <div className="position-relative overflow-hidden" style={{ height: "220px" }}>
                <img
                  src={car.after}
                  alt={`${car.title} after`}
                  className="w-100 h-100 position-absolute top-0 start-0"
                  style={{ objectFit: "cover", transition: "0.5s" }}
                />
                <img
                  src={car.before}
                  alt={`${car.title} before`}
                  className="w-100 h-100 position-absolute top-0 start-0"
                  style={{
                    objectFit: "cover",
                    opacity: 0,
                    transition: "0.5s",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold" style={{ color: textColor }}>
                  {car.title}
                </h5>
                <p className="card-text" style={{ color: textColor }}>
                  {car.description}
                </p>
                <button
                  className="btn w-100"
                  style={{
                    background: buttonColor,
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={() => setSelectedCar(car)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hover effect */}
      <style>{`
        .card .position-relative:hover img:nth-child(2) {
          opacity: 1;
        }
      `}</style>

      {/* Modal */}
      {selectedCar && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.6)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-3 shadow-lg">
              <div
                className="modal-header"
                style={{
                  background: modalGradient,
                  color: "white",
                }}
              >
                <h5 className="modal-title">{selectedCar.title}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedCar(null)}
                ></button>
              </div>
              <div className="modal-body text-center" style={{ color: textColor }}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <h6 className="text-muted">Before</h6>
                    <img
                      src={selectedCar.before}
                      alt={`${selectedCar.title} before`}
                      className="img-fluid rounded-2 shadow-sm"
                      style={{ maxHeight: "250px" }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <h6 className="text-muted">After</h6>
                    <img
                      src={selectedCar.after}
                      alt={`${selectedCar.title} after`}
                      className="img-fluid rounded-2 shadow-sm"
                      style={{ maxHeight: "250px" }}
                    />
                  </div>
                </div>
                <h4 style={{ color: "#198754" }}>{selectedCar.price}</h4>
                <p className="mt-3">{selectedCar.details}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedCar(null)}
                >
                  Close
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => alert("Booking Confirmed!")}
                >
                  Book Now 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
