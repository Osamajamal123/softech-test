import "./style.css";
import Mobile1 from "../../assets/images/mobile1.png";
import Apps from "../../assets/images/apps.png";
import React from "react";

const Aboutus = () => {
  return (
    <div className="container">
      <div>
        {/* download_app_container */}
        <div className="download_app_container">
          <div className="download_app_left">
            {/* heading */}
            <div className="download_app_heading">
              <h1>Download App</h1>
            </div>
            {/* paragrapg */}
            <div className="download_app_paragraph">
              <p>
                Wisdom new and valley answer. Contented it so is discourse
                recommend. Man its upon him call mile. An pasture he himself
                believe ferrars besides cottage.
              </p>
            </div>
            {/* smart_service_button */}
            <div className="smart_service_button">
            <div>
                <img src={Apps} alt=""/>
            </div>
            </div>
          </div>
          {/* right_side */}
          <div className="smart_service_left">
            <div className="mobile-img">
              <img src={Mobile1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
