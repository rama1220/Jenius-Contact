import bukuIcon from "../assets/Images/bukuicon.png";
import { Link } from "react-router-dom";
export default function DisplayMain() {
  return (
    <>
      <div className="container-box">
        <div className="box">
          <Link to="menu">
            <img src={bukuIcon} className="icon" />
          </Link>
        </div>
      </div>
    </>
  );
}
