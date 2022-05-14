import React from "react";
import Info from "../Info/Info";
import Asite from "./Asite";
import Banner from "./Banner";
import Contact from "./Contact";
import MakeAppoinment from "./MakeAppoinment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Asite></Asite>
      <MakeAppoinment></MakeAppoinment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
