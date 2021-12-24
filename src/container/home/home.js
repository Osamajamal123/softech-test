import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Aboutus from "../../components/aboutUs/aboutUs";
import Ourclients from "../../components/ourClients/ourClients";
import Testimonials from "../../components/testimonials/testimonials";
import FAQS from "../../components/faqs/faqs";
import DownloadApp from "../../components/downloadApp/downloadApp";
import Subscribe from "../../components/subscribe/subscribe";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Aboutus />
      <Ourclients />
      <Testimonials />
      <FAQS />
      <DownloadApp />
      <Subscribe />
      <Footer />
    </div>
  );
};
export default Home;
