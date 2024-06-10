import { MdOutlineLocationOn } from "react-icons/md";
import Button from "../Buttons/Button";

function Search() {
  return (
    <div className="search-input-area">
      <div className="by-state input">
        <span>
          {" "}
          <MdOutlineLocationOn />
        </span>
        <input type="text" placeholder="State" />
      </div>
      <div className="by-city input">
        <span >
          {" "}
          <MdOutlineLocationOn />
        </span>

        <input type="text" placeholder="City" />
      </div>
      <Button label="Search" />
    </div>
  );
}

export default Search;
