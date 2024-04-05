import Avatar from "../assets/Images/avatar.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Head({ back = "" }) {
  return (
    <div className="header-box">
      <div className="back">
        <Link to={`/${back}`} className="linkTo">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </Link>
      </div>
      <div className="contact-title">
        <h3>Contacts</h3>
      </div>
      <div className="profile-icon">
        <img src={Avatar} alt="" />
      </div>
    </div>
  );
}

Head.propTypes = {
  back: PropTypes.string,
};
