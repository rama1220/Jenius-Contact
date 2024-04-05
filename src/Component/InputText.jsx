import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData, searchContact } from "../feature/dataSlice.js";

export default function InputText() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();



  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim() !== "") {
      dispatch(searchContact(e.target.value.trim()));

    } else {
      dispatch(fetchData());
    }
  };

  return (
    <>
      <div className="input-container">
        <div className="input-box">
          <div className="icon-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
          <input type="text" required={true} placeholder="Search Contact..." value={searchTerm} onChange={handleInputChange} className="input" />
        </div>
      </div>
    </>
  );
}
