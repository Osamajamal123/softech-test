import "./style.css";
const Footer = () => {
  return (
    <div>
      {/* main_container_div */}
      <div className="container">
        {/* footer_main_div */}
        <div className="footer_main_div">
          {/* smart_home_div */}
          <div className="smart_home_div">
            {/* heading_div */}
            <div className="heading_div">
              <h1>smartHome</h1>
            </div>
            {/* text_div */}
            <div className="text_div">
              <p>
                Automate your entire healthcare hiring, onboarding and
                compliance with a true technology platform.
              </p>
            </div>
            {/* input_button_div */}
            <div className="input_button_div">
              {/* input_div */}
              <div className="input_div">
                <input placeholder="Email Address" className="place_holder" />
              </div>
              {/* button_div */}
              <div className="button_div">
                <button>Register</button>
              </div>
            </div>
          </div>
          {/* Categories_ul_lis_div */}
          <div className="ul_lis_div">
            {/* CATEGORIES_heading_div */}
            <div className="heading_div">
              <h1>CATEGORIES</h1>
            </div>
            {/* ul_main*/}
            <ul className="ul_main">
              <li>Product Managment</li>
              <li>Design / Creative</li>
              <li>Education & Training</li>
              <li>UI/UX Designers</li>
              <li>Development</li>
              <li>Customer Support</li>
            </ul>
          </div>
          {/* About_Us_ul_lis_div */}
          <div className="ul_lis_div">
            {/* About_heading_div */}
            <div className="heading_div">
              <h1>About</h1>
            </div>
            {/* ul_main*/}
            <ul className="ul_main">
              <li>About Us</li>
              <li>Partnerships</li>
              <li>Finance Experts</li>
              <li>Project Management</li>
              <li>Product Manager</li>
              <li>The Team</li>
            </ul>
          </div>
          {/* Follow_us_ul_lis_div */}
          <div className="ul_lis_div">
            {/* Follow_Us_heading_div */}
            <div className="heading_div">
              <h1>Follow Us</h1>
            </div>
            {/* ul_main*/}
            <ul className="ul_main">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer_background_color_text */}
      <div className="footer_background_color_text">
        {/* text_div */}
        <div className="text_div">
          <p>Copyright © 2021 all rights reserved smartHome</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
