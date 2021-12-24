import "./style.css";
import Union from "../../assets/images/Union.png";

const Subscribe = () => {
  return (
    <div className="container">
      {/* background_color */}
      <div className="background_color">
        {/* subscribe_container */}
        <div className="subscribe_container ">
          {/* subscribe_heading_paragraph_left */}
          <div className="subscribe_heading_paragraph">
            <div>
              <h1>Subscribe to get updated</h1>
            </div>
            <div>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque .
              </p>
            </div>
          </div>
          {/* subscribe_button_img_right */}
          <div className="subscribe_button_img_right">
            {/* subscribe_button */}
            <div className="subscribe_button">
              <button>Get Start</button>
            </div>
            {/* subscribe_img */}
            <div className="subscribe_img">
              <img src={Union} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
