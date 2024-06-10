import bannerImg from "../../assets/images/bannerImg.png";
import Button from "../Buttons/Button";
import FilterBox from "../FilterBox/FilterBox";

function Banner() {
  return (
    <div className="banner-container">
      <div className="content">
        <div className="txt-1">Skip the travel! Find Online</div>
        <div className="txt-2">
          <span style={{ color: "black" }}>Medical</span> Centers
        </div>
        <div className="txt-3">
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </div>
        <Button label="Find Centers" />
      </div>
      <div className="image-area">
        <img src={bannerImg} alt="" />
      </div>
        <div className="search-area">
            <FilterBox/>
        </div>
      
    </div>
  );
}

export default Banner;
