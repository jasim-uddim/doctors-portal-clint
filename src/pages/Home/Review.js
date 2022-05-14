import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{review.description}</p>
        <div class="flex items-center">
          <div class="avatar">
            <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 mx-5">
              <img src={review.img} />
            </div>
          </div>
          <div>
            <h4 className="text-3xl font-bold">{review.name}</h4>
            <h5 className="text-xl">{review.address}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
