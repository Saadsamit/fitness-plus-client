import banner from "@/assets/homeBanner.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div
      style={{ background: `url(${banner})` }}
      className="h-[calc(100vh-93px)] relative"
    >
      <div className="absolute inset-0 opacity-65 bg-black"></div>
      <div className="relative z-10 text-white space-y-4 flex flex-col text-center justify-center items-center h-full">
        <h3 className="text-base font-light">Premium Fitness Equipment & Accessories for Optimal Performance</h3>
        <h1 className="text-5xl font-bold">Gear Up for Success</h1>
        <Button>
          <Link to={"/products"}>Shop Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomeBanner;
