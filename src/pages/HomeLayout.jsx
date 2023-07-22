import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </>
  );
};
export default HomeLayout;
