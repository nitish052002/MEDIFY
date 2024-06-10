import Banner from "../../components/Banner/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../assets/images/carouselOne.png";
import slide2 from "../../assets/images/carouselTwo.png";
import slide3 from "../../assets/images/carouselThree.png";
import icon2 from "../../assets/images/icon-2.png";
import icon6 from "../../assets/images/icon-6.png";
import icon7 from "../../assets/images/icon-7.png";
import icon8 from "../../assets/images/icon-8.png";
import icon9 from "../../assets/images/icon-9.png";
import icon10 from "../../assets/images/icon-10.png";
import icon11 from "../../assets/images/icon-11.png";
import imgCardOne from "../../assets/images/patent1.png";
import imgCardTwo from "../../assets/images/patent2.png";
import DoctorOne from "../../assets/images/doctor-1.png";
import DoctorTwo from "../../assets/images/doctor-2.png";
import DoctorThree from "../../assets/images/doctor-3.png";
import MiniCard from "../../components/Cards/MiniCard";
import Button from "../../components/Buttons/Button";
import PillCard from "../../components/Cards/PillCard";
import { LuPhoneCall } from "react-icons/lu";
import { PiSealCheckFill } from "react-icons/pi";
import familyIconOne from "../../assets/images/famicon-1.png";
import familyIconTwo from "../../assets/images/famicon-2.png";
import familyIconThree from "../../assets/images/famicon-3.png";
import familyIconfour from "../../assets/images/famicon-4.png";

import detox from "../../assets/images/detox.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
     <Header/>
      <div className="header-banner-section">
        <Banner />
      </div>

      <div className="slider">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="row">
              <div className="slide">
                <img src={slide1} alt="" />
              </div>

              <div className="slide">
                <img src={slide2} alt="" />
              </div>

              <div className="slide">
                <img src={slide3} alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row">
              <div className="slide">
                <img src={slide3} alt="" />
              </div>

              <div className="slide">
                <img src={slide2} alt="" />
              </div>

              <div className="slide">
                <img src={slide1} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="specialisation-container">
        <div className="title">Find By Specialisation</div>
        <div className="options">
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
          <MiniCard label="Dentistry" img={icon2} />
        </div>

        <Button label="View All" />
      </div>

      <div className="medical_specialist">
        <div className="title">Our Medical Specialist</div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="row">
              <PillCard
                name="Dr. Ahmad Khan"
                role="Neruologist"
                avatar={DoctorOne}
              />
              <PillCard
                name="Heena Suchdeva"
                role="Orthopadics"
                avatar={DoctorTwo}
              />
              <PillCard
                name="Ankur Suchdeva"
                role="Medicines"
                avatar={DoctorThree}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <PillCard
                name="Dr. Ahmad Khan"
                role="Neruologist"
                avatar={DoctorOne}
              />
              <PillCard
                name="Dr. Ahmad Khan"
                role="Neruologist"
                avatar={DoctorOne}
              />
              <PillCard
                name="Dr. Ahmad Khan"
                role="Neruologist"
                avatar={DoctorOne}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="patent-caring-container">
        <div className="img-area">
          <div className="badge">
            <div className="item-one">
              <div className="call-icon">
                <LuPhoneCall />
              </div>
              <div className="text">Free Consulation</div>
            </div>
            <div className="item-two">Consultation with the best</div>
          </div>
          <div className="img-card" id="card-one">
            <img src={imgCardTwo} alt="" />
          </div>
          <div className="img-card" id="card-two">
            <img src={imgCardOne} alt="" />
          </div>
        </div>
        <div className="content-area">
          <p className="p1">HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
          <p className="p2">
            <span style={{ color: "$dark-blue" }}>Patient</span> Caring
          </p>
          <p className="p3">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>

          <div className="list">
            <div className="point">
              <span className="check">
                <PiSealCheckFill />
              </span>
              <p>Stay Updated About Your Health</p>
            </div>
            <div className="point">
              <span className="check">
                <PiSealCheckFill />
              </span>
              <p>Check Your Results Online</p>
            </div>
            <div className="point">
              <span className="check">
                <PiSealCheckFill />
              </span>
              <p>Manage Your Appointments</p>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-container">
        <p>Blog & News</p>
        <div className="title">Read Our Latest News</div>

        <div className="articles-container">
          <div className="card">
            <div className="img">
              <img src={detox} alt="" />
            </div>
            <div className="content">
              <div className="line-one">
                <span>Medical</span>
                <span>March 31, 2024</span>
              </div>
              <div className="line-two">
                6 Tips To Protect Your Mental Health When You’re Sick
              </div>
              <div className="line-three">
                <div className="avatar">
                  <img src={detox} alt="" />
                </div>
                <span className="name">Rebecca</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src={detox} alt="" />
            </div>
            <div className="content">
              <div className="line-one">
                <span>Medical</span>
                <span>March 31, 2024</span>
              </div>
              <div className="line-two">
                6 Tips To Protect Your Mental Health When You’re Sick
              </div>
              <div className="line-three">
                <div className="avatar">
                  <img src={detox} alt="" />
                </div>
                <span className="name">Rebecca</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src={detox} alt="" />
            </div>
            <div className="content">
              <div className="line-one">
                <span>Medical</span>
                <span>March 31, 2024</span>
              </div>
              <div className="line-two">
                6 Tips To Protect Your Mental Health When You’re Sick
              </div>
              <div className="line-three">
                <div className="avatar">
                  <img src={detox} alt="" />
                </div>
                <span className="name">Rebecca</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="families-container">
        <div className="content-one">
          <p>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
          <div className="bold-text">Our Families</div>
          <div className="para">
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </div>
        </div>
        <div className="content-two">
          <div className="family-card">
            <div className="icon">
              <img src={familyIconOne} alt="" />
            </div>
            <div className="num">5000+</div>
            <div className="label">Happy Patients</div>
          </div>

          <div className="family-card">
            <div className="icon">
              <img src={familyIconTwo} alt="" />
            </div>
            <div className="num">200+</div>
            <div className="label">Hospitals</div>
          </div>


          <div className="family-card">
            <div className="icon">
              <img src={familyIconThree} alt="" />
            </div>
            <div className="num">1000+</div>
            <div className="label">Laborities</div>
          </div>

          <div className="family-card">
            <div className="icon">
              <img src={familyIconfour} alt="" />
            </div>
            <div className="num">700+</div>
            <div className="label">Expert Doctors</div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Home;
