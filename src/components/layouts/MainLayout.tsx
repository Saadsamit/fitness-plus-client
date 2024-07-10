import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="min-h-[calc(100vh-345px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
