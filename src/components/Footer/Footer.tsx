import React, { useState } from "react";
import Button from "../Buttons/Button";
import smily from "../../assets/images/smily.png";
import heart from "../../assets/images/heart.png";
import doctor from "../../assets/images/frequent.png";
import mobImg from "../../assets/images/mob.png";
import apple from "../../assets/images/apple.png";
import store from "../../assets/images/store.png";
import brandLogo from "../../assets/images/brandLogo.svg";
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleToggle = (index: number): void => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <footer>
      <section className="question-area">
        <div className="mini-title">Get Your Answers</div>
        <div className="giant-text">Frequently Asked Questions</div>

        <section>
          <div className="sub-section-one">
            <div className="img-area">
              <img src={doctor} alt="" />

              <div className="smily-badge">
                <div className="icon">
                  <img src={smily} alt="" />
                </div>

                <div className="content">
                  <div className="likes">80K+</div>
                  <div className="text">Happy Parents</div>
                </div>
              </div>
              <div className="heart">
                <div className="img">
                  <img src={heart} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="sub-section-two">
            <div className="accordian">
              <div
                className={
                  activeIndex === 1 ? "accordian-item active" : "accordian-item"
                }
              >
                <div className="title" onClick={() => handleToggle(1)}>
                  Why Choose Our Medical For Your Family
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero officia recusandae ullam reprehenderit, sit facilis
                  sint rerum obcaecati? Repellendus error ullam deserunt, a
                  laudantium minima minus quis voluptate voluptatum tempora!
                </div>
              </div>

              <div
                className={
                  activeIndex === 2 ? "accordian-item active" : "accordian-item"
                }
              >
                <div className="title" onClick={() => handleToggle(2)}>
                  Why Are we Diffrent From Others ?
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero officia recusandae ullam reprehenderit, sit facilis
                  sint rerum obcaecati? Repellendus error ullam deserunt, a
                  laudantium minima minus quis voluptate voluptatum tempora!
                </div>
              </div>

              <div
                className={
                  activeIndex === 3 ? "accordian-item active" : "accordian-item"
                }
              >
                <div className="title" onClick={() => handleToggle(3)}>
                  Trust & Experience Senior care & love
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero officia recusandae ullam reprehenderit, sit facilis
                  sint rerum obcaecati? Repellendus error ullam deserunt, a
                  laudantium minima minus quis voluptate voluptatum tempora!
                </div>
              </div>

              <div
                className={
                  activeIndex === 4 ? "accordian-item active" : "accordian-item"
                }
              >
                <div className="title" onClick={() => handleToggle(4)}>
                  How to get appointment for emergencey cases ?
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero officia recusandae ullam reprehenderit, sit facilis
                  sint rerum obcaecati? Repellendus error ullam deserunt, a
                  laudantium minima minus quis voluptate voluptatum tempora!
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="sendSMSarea">
        <div className="left-section">
          <div className="img">
            <img src={mobImg} alt="" />
          </div>
        </div>

        <div className="right-section">
          <div className="bigger-text">
            Download The <br />
            <span>Medify</span> App
          </div>
          <div className="mini-text">Get the link to download the app</div>

          <div className="sms-container">
            <div className="input">
              <div className="code">+91</div>
              <input type="" placeholder="Enter Phone Number" />
            </div>
            <Button label="Send SMS" />
          </div>

          <div className="mobile-container">
            <div className="applestore">
              <div className="logo">
                <img src={apple} alt="" />
              </div>
              <div className="text">Google Play</div>
            </div>
            <div className="googleplay">
              <div className="logo">
                <img src={store} alt="" />
              </div>
              <div className="text">Google Play</div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-navigation-section">
        <div className="navigation-section">
          <div className="box-one">
            <div className="logo">
              <img src={brandLogo} alt="" />
            </div>
            <div className="scoial-media-icons">
              <span className="icon">
                <FaFacebookF />
              </span>
              <span className="icon">
                <FaTwitter />
              </span>
              <span className="icon">
                <FaYoutube />
              </span>
              <span className="icon">
                <FaPinterest />
              </span>
            </div>
          </div>

          <div className="box-two">
            <div className="col">
              <ul>
                <li>About Us</li>
                <li>Our Pricing</li>
                <li>Our Gallery </li>
                <li>Appointment</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Orthology</li>
                <li>Neurology</li>
                <li>Dental Care</li>
                <li>Opthalmology</li>
                <li>Cardiology</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>About Us</li>
                <li>Our Pricing</li>
                <li>Our Gallery </li>
                <li>Appointment</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright-txt">
        Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
