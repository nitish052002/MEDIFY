import Search from "../SearchArea/Search";
import iconONe from "../../assets/images/icon-1.png";
import iconTwo from "../../assets/images/icon-2.png";
import iconThree from "../../assets/images/icon-3.png";
import iconFour from "../../assets/images/icon-4.png";
import iconFive from "../../assets/images/icon-5.png";
import MiniCard from "../Cards/MiniCard";

function FilterBox() {
  return (
    <div className="filter-container">
      <Search />
      <p>You may be looking for</p>
      <div className="tabs">
        <MiniCard label="Doctors" img={iconONe} />
        <MiniCard label="Labs" img={iconTwo} />
        <MiniCard label="Hospitals" img={iconThree} />
        <MiniCard label="Medical Store" img={iconFour} />
        <MiniCard label="Ambulance" img={iconFive} />
      </div>
    </div>
  );
}

export default FilterBox;
