import Router from "@route/Route";
import { RouterProvider } from "react-router-dom";
import "@component/style.css";
import Cursor from "@component/Cursor";
// import { Cursor } from "@component/Cursor";
import { CursorifyProvider, DefaultCursor } from "@cursorify/react";
function App() {
  return (
    <>
      {/* <CursorifyProvider cursor={<Cursor />}> */}
        <RouterProvider router={Router} />
        <Cursor />
      {/* </CursorifyProvider> */}
    </>
  );
}

export default App;
