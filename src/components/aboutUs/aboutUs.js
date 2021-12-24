import "./style.css";
import Decorator from "../../assets/images/Decorator.png";
import Mobile1 from "../../assets/images/mobile1.png";
import Mobile2 from "../../assets/images/secondmobile.png";
import Mobile3 from "../../assets/images/thirdmobile.png";
import React from "react";

const Aboutus = () => {
  let smart_service = [
    {
      id: 1,
      img: Mobile1,
      heading: "Smart Home’s Smart Services",
      paragraph:
        "Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.",
      button: "Learn more",
    },
    {
      id: 2,
      img: Mobile2,
      heading: "What app can do to your appliences?",
      paragraph:
        "Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.",
      button: "Learn more",
    },
    {
      id: 3,
      img: Mobile3,
      heading: "Control Electric Appliances",
      paragraph:
        "Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.",
      button: "Learn more",
    },
  ];
  return (
    <div>
      <div className="about_flex">
        {/* left_img_div */}
        <div className="img_div">
          <img src={Decorator} alt="" />
        </div>
        {/* about_us */}
        <div className="about_us_div">
          <h1>About us</h1>
        </div>
      </div>
      {/* mobile_img_div */}
      {smart_service?.map((smart) =>
        smart.id === 2 ? (
          <div>
            <div className="container smart_service_container">
               {/* smart_service_container */}
               <div className="smart_service_right">
                {/* heading */}
                <div className="smart_service_heading">
                  <h1>{smart.heading}</h1>
                </div>
                {/* paragrapg */}
                <div className="smart_service_paragraph">
                  <p>{smart.paragraph}</p>
                </div>
                {/* smart_service_button */}
                <div className="smart_service_button">
                  <button>{smart.button}</button>
                </div>
              </div>
              {/* left_side */}
              <div className="smart_service_left">
                <div className="mobile-img">
                  <img src={smart.img} alt="" />
                </div>
                <div className="box"></div>
              </div>
            
            </div>
          </div>
        ) : (
          <div>
            <div className="container smart_service_container">
              {/* left_side */}
              <div className="smart_service_left">
                <div className="mobile-img">
                  <img src={smart.img} alt="" />
                </div>
                <div className="box"></div>
              </div>
              {/* smart_service_container */}
              <div className="smart_service_right">
                {/* heading */}
                <div className="smart_service_heading">
                  <h1>{smart.heading}</h1>
                </div>
                {/* paragrapg */}
                <div className="smart_service_paragraph">
                  <p>{smart.paragraph}</p>
                </div>
                {/* smart_service_button */}
                <div className="smart_service_button">
                  <button>{smart.button}</button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default Aboutus;
