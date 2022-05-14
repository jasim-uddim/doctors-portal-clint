import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Visit our location"
        bgClass="bg-accent"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact us now"
        bgClass="bg-primary"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
