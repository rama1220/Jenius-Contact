import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DisplayMain from "./Component/DisplayMain";
import MenuBook from "./Component/MenuBook";
import FormContact from "./Component/FormContact";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: DisplayMain,
      },
      {
        path: "/menu",
        Component: MenuBook,
      },
      {
        path: "/add",
        Component: FormContact,
      }
    ],
  },
]);
export default Router;
