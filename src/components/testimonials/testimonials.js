import "./style.css";
import Profile1 from "../../assets/images/profile1.png";
import Profile2 from "../../assets/images/profile2.png";
import Profile3 from "../../assets/images/profile3.png";
import Profile4 from "../../assets/images/profile4.png";
import Groupleft from "../../assets/images/groupleft.png";
import Groupright from "../../assets/images/groupright.png";
import Vector2 from "../../assets/images/Vector2.png";

const Aboutus = () => {
  let testimonials = [
    {
      id: 1,
      paragraph:
        " our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions",
      img: Profile1,
      title: "Cham",
      profession: "Product designer",
    },
    {
      id: 2,
      paragraph:
        "We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured",
      img: Profile2,
      title: "Scopic Software",
      profession: "Custom IT Solutions Firm",
    },
    {
      id: 3,
      paragraph:
        "It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done.",
      img: Profile3,
      title: "Russell Lee",
      profession: "Writer",
    },
    {
      id: 4,
      paragraph:
        "At SOLACE Engineers, we provide engineering solutions and other services on various freelancing platforms. Among them all, Guru is the best and our first choice to invite clients.",
      img: Profile4,
      title: "Solace Engineers Inc.",
      profession: "Engineering Firm",
    },
  ];
  return (
    <>
      <div className="container">
        {/* testimonial_title */}
        <div className="testimonial_title">
          <h1>Testimonials</h1>
        </div>
        {/* testimonial_paragraph */}
        <div className="testimonial_paragraph">
          <p>
            Wisdom new and valley answer. Contented it so is discourse
            recommend. Man its upon <br /> him call mile. An pasture he himself
            believe ferrars besides cottage.
          </p>
        </div>
        {/*testimonials*/}
        <div className="testimonial_container">
          {testimonials?.map((testimonialmap) => (
            <div className="box">
              {/* box_paragraph */}
              <div className="box_paragraph">
                <p> {testimonialmap.paragraph} </p>
              </div>
              {/* box_img_profile */}
              <div className="box_img_profile">
                {/* box_img */}
                <div className="box_img">
                  <img src={testimonialmap.img} alt="" />
                </div>
                {/* box_profile_data */}
                <div className="box_profile_data">
                  <h1>{testimonialmap.title}</h1>
                  <p>{testimonialmap.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* bottom_img */}
        <div className="bottom_imges_container">
          <div className="bottom_img">
            <img src={Groupleft} alt="" />
          </div>
          <div className="bottom_img">
            <img src={Groupright} alt="" />
          </div>
        </div>
      </div>
      {/* linegraph_img */}
      <div className="vector3_img">
        <img src={Vector2} alt="" />
      </div>
    </>
  );
};
export default Aboutus;
