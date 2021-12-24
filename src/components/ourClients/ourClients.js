import "./style.css";
import Round from "../../assets/images/round.png";
import Travel from "../../assets/images/travel.png";
import Octane from "../../assets/images/octane.png";
import Life from "../../assets/images/life.png";
import Smile from "../../assets/images/smile.png";
import True from "../../assets/images/true2.png";
import Cubex from "../../assets/images/cubex.png";
import Mokeys from "../../assets/images/mokeys.png";
import Precor from "../../assets/images/precor.png";
import React from "react";

const Aboutus = () => {
  let client_feedbacks = [
    {
      id: 1,
      img: Travel,
      title: "",
    },
    {
      id: 2,
      img: Octane,
      title: "",
    },
    {
      id: 3,
      img: Life,
      title: "",
    },
    {
      id: 4,
      img: Smile,
      title: "",
    },
    {
      id: 5,
      img: True,
      title: "",
    },
    {
      id: 6,
      img: Cubex,
      title: "",
    },
    {
      id: 7,
      img: Mokeys,
      title: "",
    },
    {
      id: 8,
      img: Precor,
      title: "",
    },
  ];
  return (
    <div className="container">
      <div className="our_client_container">
        {/* right_img_div */}
        <div className="img_div">
          <img src={Round} alt="" />
        </div>
        {/* our-clint */}
        <div className="our_client_title">
          <h1>Our Clients</h1>
        </div>
      </div>
      {/* our_client_paragraph */}
      <div className="our_client_paragraph">
        <p>
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon <br /> him call mile. An pasture he himself believe
          ferrars besides cottage.
        </p>
      </div>
      {/* our_client_feedbacks */}
      <div className="our_client_feedbacks_container">
        {client_feedbacks?.map((client) => (
          <div className="box">
            <img src={client.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Aboutus;
