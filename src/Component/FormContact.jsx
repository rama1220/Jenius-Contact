import Head from "./Head";
export default function FormContact() {
  return (
    <>
      <div className="container-box">
        <div className="box-menu-form">
          <Head back="menu" />
          <div className="add-container">
            <h1>Add Contact</h1>
            <div className="center-form">
              <div className="form-box">
                <form action="">
                  <label htmlFor="foto">
                    <input type="file" id="foto" />
                  </label>
                  <label htmlFor="firstName">
                    <input type="text" id="firstName" placeholder="First Name" />
                  </label>

                  <label htmlFor="lastName">
                    <input type="text" id="lastName" placeholder="Last Name" />
                  </label>
                  <label htmlFor="age">
                    <input type="number" id="age" placeholder="Age" />
                  </label>
                </form>

                <button>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
