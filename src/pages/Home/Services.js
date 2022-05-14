import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 2,
      name: "Fluoride Treatment",
      description: "",
      img: fluoride,
    },
    {
      _id: 3,
      name: "Fluoride Treatment",
      description: "",
      img: cavity,
    },
    {
      _id: 1,
      name: "Fluoride Treatment",
      description: "",
      img: whitening,
    },
  ];
  return (
    <div className="my-12">
      <div className="text-center">
        <h1 className="text-primary uppercase text-xl font-bold">
          our services
        </h1>
        <h2 className="text-3xl">services with provide</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
