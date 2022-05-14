import React from "react";
import appointment from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="text-center">
        <h1 className="text-primary font-bold text-xl">contact us</h1>
        <h1 className="text-3xl text-white">Stay connected with us</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2">
          <div>
            <div class="card-body">
              <div class="form-control">
                <input
                  type="text"
                  placeholder="email address"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="subject"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <textarea
                  type="text"
                  placeholder="your message"
                  class="input input-bordered input-lg"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
