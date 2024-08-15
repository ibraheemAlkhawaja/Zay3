import { Navigation, Pagination ,Autoplay} from "swiper/modules";
import { Categories, Featured, Footer } from "../../Section";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../Assets/img/banner_img_01.jpg";
import img2 from "../../Assets/img/banner_img_02.jpg";
import img3 from "../../Assets/img/banner_img_03.jpg";
import { useDispatch, useSelector } from "react-redux";
import { ChangeMood } from "../../Redux/ShopSlice";
const Home = () => {
  return (
    <>
      <div className="hero-swiper">
        <Swiper
          modules={[Navigation, Pagination,Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay : 1500,
            disableOnInteraction :false
          }}
        >
          <SwiperSlide>
            <div className="container hero">
              <div className="row row-cols-md-1">
                <div className="col">
                  <div className="hero-content">
                    <div className="text-hero">
                      <p>
                        <span>Zay </span>eCommerce
                      </p>
                      <p>Tiny and Perfect eCommerce Template</p>
                      <p>
                        Zay Shop is an eCommerce HTML5 CSS template with latest
                        version of Bootstrap 5 (beta 1). This template is 100%
                        free provided by TemplateMo website. Image credits go to
                        Freepik Stories, Unsplash and Icons 8.
                      </p>
                    </div>
                    <div className="img-hero">
                      <img src={img1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container hero">
              <div className="row row-cols-md-1">
                <div className="col">
                  <div className="hero-content">
                    <div className="text-hero">
                      <p></p>
                      <p>Proident occaecat Aliquip ex ea commodo consequat</p>
                      <p>
                        You are permitted to use this Zay CSS template for your
                        commercial websites. You are not permitted to
                        re-distribute the template ZIP file in any kind of
                        template collection websites.
                      </p>
                    </div>
                    <div className="img-hero">
                      <img src={img2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container hero">
              <div className="row row-cols-md-1">
                <div className="col">
                  <div className="hero-content">
                    <div className="text-hero">
                      <p>
                        <span>Zay </span>eCommerce
                      </p>
                      <p>Tiny and Perfect eCommerce Template</p>
                      <p>
                        We bring you 100% free CSS templates for your websites.
                        If you wish to support TemplateMo, please make a small
                        contribution via PayPal or tell your friends about our
                        website. Thank you.
                      </p>
                    </div>
                    <div className="img-hero">
                      <img src={img3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      <Categories />
      <Featured />
      <Footer />
    </>
  );
};
export default Home;
