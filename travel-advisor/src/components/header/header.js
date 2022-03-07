import "./header.scss";
import { Autocomplete } from "@react-google-maps/api";

export default function Header() {
  return (
    <div className="mainHeader">
      <h5>Travel Advisor</h5>
      <div className="right">
        <h6>Explore new place</h6>
        <div className="input">
           <span>
         <img src="/" alt="" /> 
          </span> 
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}
