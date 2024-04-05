import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../feature/dataSlice";
import BoxContact from "./BoxContact";

export default function Contacts() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.items);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  if (status === "loading") {
    return <div className="condition">Loading...</div>;
  }

  if (status === "failed") {
    return <div className="condition">Error: {error}</div>;
  }

  return (
    <div className="contact-person">
      <div className="person">
        {data?.data?.length === undefined ? (
          <BoxContact key={data?.data?.id} id={data?.data?.id} firstName={data?.data?.firstName} lastName={data.data?.lastName} age={data?.data?.age} photo={data?.data?.photo} />
        ) : (
          data?.data?.map((person) => <BoxContact key={person.id} id={person.id} firstName={person.firstName} lastName={person.lastName} age={person.age} photo={person.photo} />)
        )}
      </div>
    </div>
  );
}
