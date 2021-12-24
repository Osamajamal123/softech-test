import "./style.css";
import HeaderImg from "../../assets/images/head.png";
const Header = () => {
  return (
    <div>
      <div className="background_color">
        <div>
          {/* navbar_main */}
          <div className="navbar_main">
            {/* left_side_navbar */}
            <div className="navbar_left_container">
              <div className="left_side_navbar ">
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Testimonials</li>
                  <li>Testimonials</li>
                  <li>Contact</li>
                </ul>
              </div>
              {/* center_navbar */}
              <div className="center_navbar">
                <h1>smartHome</h1>
              </div>
            </div>

            {/* right_side_navbar */}
            <div className="right_side_navbar">
              {/* login_button_right_navbar */}
              <div className="login_button_right_navbar">
                <button>Login</button>
              </div>
              {/* signup_button */}
              <div className="signup_button_right_navbar">
                <button>Sign up</button>
              </div>
              {/* navbar_img_head */}
              <div className="navbar_img_head">
                <img src={HeaderImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
