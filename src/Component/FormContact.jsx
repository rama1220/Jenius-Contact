import Head from "./Head";
import { useDispatch } from "react-redux";
import { addData } from "../feature/dataSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function FormContact() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(null);

  console.log(firstName, lastName, age, imageSrc);

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImageSrc(reader.result);
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("oke");

    const newData = {
      photo: imageSrc,
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    dispatch(addData(newData));
    navigate("/menu");
  };

  return (
    <>
      <div className="container-box">
        <div className="box-menu-form">
          <Head back="menu" />
          <div className="add-container">
            <h1>Add Contact</h1>
            <div className="center-form">
              <div className="form-box">
                <form>
                  <label htmlFor="foto">
                    <input type="file" id="foto" onChange={handleImageChange} />
                  </label>
                  <label htmlFor="firstName">
                    <input type="text" id="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                  </label>

                  <label htmlFor="lastName">
                    <input type="text" id="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                  </label>
                  <label htmlFor="age">
                    <input type="number" id="age" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                  </label>
                </form>

                <button type="submit" onClick={handleSubmit}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
