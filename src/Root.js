import { Outlet } from "react-router-dom";
import Header from "./Section/Header/Header";

const Root = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
export default Root;
