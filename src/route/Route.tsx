import { createBrowserRouter } from "react-router-dom";
import Nav from "@component/Nav";
import Home from "@page/Home";
import Port from "@page/Port";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    /* children: [
      {
        index: true,
        element:  <Home id="home" />,
      },
      {
        path: "port",
        element: <Port id="port" />,
      },
    ], */
  },
]);

export default route;
