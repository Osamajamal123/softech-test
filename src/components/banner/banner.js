import "./style.css";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import Instagram from "../../assets/images/instagram.png";
import LinkedIn from "../../assets/images/linkedin.png";
import Lines from "../../assets/images/line.png";
import Hero from "../../assets/images/Hero.png";
import Curve from "../../assets/images/Vector.png";
import DownArrow from "../../assets/images/downarrow.png";
import Apps from "../../assets/images/apps.png";
import LineGraph from "../../assets/images/linegraph.png";
const Banner = () => {
  return (
    <div>
      {/* // background_color_bannner */}
      <div className="background_color_banner">
        <div className="lines_img">
          <img src={Lines} alt="" />
        </div>
        <div className="container">
          {/* banner_heading */}
          <div className="banner_heading">
            <h1>
              Smart Home <br /> Application
            </h1>
          </div>
          {/* banner_paragraph */}
          <div className="banner_paragraph">
            <p>
              Wisdom new and valley answer. Contented it so is discourse
              recommend. Man its upon <br /> him call mile. An pasture he
              himself believe ferrars besides cottage.
            </p>
          </div>
        </div>
        {/* social_media_container */}
        <div className="social_media_container">
          {/* social_media_images */}
          <div className="social_media_images">
            <div className="icon">
              <img src={Facebook} alt="" />
            </div>
            <div className="icon">
              <img src={Instagram} alt="" />
            </div>
            <div className="icon">
              <img src={Twitter} alt="" />
            </div>
            <div className="icon">
              <img src={LinkedIn} alt="" />
            </div>
          </div>
          {/* mobile_img */}
          <div className="mobile_img_social">
            <img src={Hero} alt="" />
          </div>
        </div>
      </div>
      {/* curves_img_container */}
      <div className="curves_img_container">
        <div className="curve_img">
          <img src={Curve} alt="" />
        </div>
        <div className="down_arrow_img">
          <img src={DownArrow} alt="" />
        </div>
      </div>
      {/* play_store_apps */}
      <div className="play_store_apps">
        <img src={Apps} alt="" />
      </div>
      <div className="line_graph">
        <img src={LineGraph} alt="" />
      </div>
    </div>
  );
};
export default Banner;
