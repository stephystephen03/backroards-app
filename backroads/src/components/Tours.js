import React from "react";
import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title text1="featured" text2="tours" />

      <div className="section-center featured-center">
        {tours.map((trip) => {
          return <Tour key={trip.id} {...trip}/>
        })}

        
      </div>
    </section>
  );
};

export default Tours;
