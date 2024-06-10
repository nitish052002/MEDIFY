import { MdThumbUpOffAlt } from "react-icons/md";
import hospital from "../../assets/images/hospital.png";
import Button from "../Buttons/Button";
import likeICon from "../../assets/images/likes-icon.png";

function HospitalDetailCard() {
  return (
    <div className="hospital-card">
      <div className="img">
        <div className="circle">
          <img src={hospital} alt="" />
        </div>
      </div>
      <div className="content">
        <div className="name">Fortis Hospital Richmond Road</div>
        <div className="location">
          <div className="area">Bangalore , Karnataka</div>
          <span>Smilessence Center for Advanced Dentistry + 1</span>
        </div>

        <div className="book-area">
          <div className="box-one">
            <div className="txt-one">
              <span>Free</span> <s>₹500</s> Consultation fee at clinic
            </div>
            <div className="txt-two">Available Today</div>
            
          </div>
          <div className="box-two">
          <div className="likes">
               <div className="icon">
                <img src={likeICon} alt="" />
               </div>
              <span className="num">6</span>
            </div>
            <Button label="Book FREE Center Visit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalDetailCard;
