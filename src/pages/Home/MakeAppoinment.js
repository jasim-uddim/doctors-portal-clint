import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Sheared/PrimaryButton/PrimaryButton";

const MakeAppoinment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center my-28"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px]" src={doctor} alert=""></img>
      </div>
      <div className="flex-1">
        <h1 className="text-primary text-xl">Appoinment</h1>
        <h3 className="text-3xl text-white">Make an appoinment today</h3>
        <p className="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus totam
          porro, sequi repellat laudantium consequuntur earum nisi beatae
          dolorem, voluptate reprehenderit ex in commodi necessitatibus ratione
          tempore, harum quidem vel rem qui excepturi culpa modi delectus nemo.
          Quidem, numquam voluptatem.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppoinment;
