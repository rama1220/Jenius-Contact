import Head from "./Head";
import InputText from "./InputText";
import Contacts from "./Contacts";
import ButtonAdd from "./ButtonAdd";
export default function MenuBook() {
  return (
    <>
      <div className="container-box">
        <div className="box-menu">
          <Head back="" />
          <InputText />
          <ButtonAdd />
          <Contacts />
        </div>
      </div>
    </>
  );
}
