import "./style.css";
import Plane from "../../assets/images/plane.png";
import Straight from "../../assets/images/straight.png";
import Blueround from "../../assets/images/blueround.png";
import Plus from "../../assets/images/plus.png";
import Minus from "../../assets/images/Icon.png";

import { useState } from "react";
const Aboutus = () => {
  const [toggle, setToggle] = useState(0);
  const ToggleHandler = (id) => {
    if (toggle === id) {
      setToggle(0);
    } else {
      setToggle(id);
    }
  };
  let faqs_data = [
    {
      id: 1,
      img1: Plane,
      img2: Straight,
      content:
        "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.",
      paragraph: "Chamber reached do he nothing be?",
    },
    {
      id: 2,
      img1: Plane,
      img2: Straight,
      paragraph: "At by pleasure of children be?",
      content:
        "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.",
    },
    {
      id: 3,
      img1: Plane,
      img2: Straight,
      paragraph: "Amounted repeated as believed in confined?",
      content:
        "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.",
    },
    {
      id: 4,
      img1: Plane,
      img2: Straight,
      paragraph: "In am do giving to afford parish settle easily garret?",
      content:
        "Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.",
    },
  ];
  return (
    <div>
      {/* faqs_title_plus_img */}
      <div className="faqs_flex">
        {/* left_img_div */}
        <div className="img_div">
          <img src={Blueround} alt="" />
        </div>
        {/* about_us */}
        <div className="faqs_title">
          <h1>FAQ’s</h1>
        </div>
      </div>
      <div className=" box_bottom container">
        {/*faqs_container*/}
        {faqs_data?.map((faqs) => (
          <div
            className={"faqs_container"}
            onClick={() => ToggleHandler(faqs.id)}
          >
            <div className="box_width">
              <div
                className={`box ${
                  faqs.id === toggle ? " selectedBox" : "unselectedBox"
                }`}
              >
                <div className="box_container">
                  <div>
                    {/* box_img1 */}
                    <div className="box_img1">
                      {faqs.id === toggle ? (
                        <img src={Minus} alt=""/>
                      ) : (
                        <img src={Plus} alt="" />
                      )}
                    </div>
                  </div>

                  {/* box_paragraph */}
                  <div className="box_paragraph">
                    <p>{faqs.paragraph}</p>
                    {faqs?.id === toggle ? <p>{faqs.content}</p> : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Aboutus;
