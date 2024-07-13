import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const Success = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center space-y-4">
        <p className="text-2xl text-textColor font-semibold capitalize flex space-x-3 items-center">
          <IoCheckmarkDoneCircleSharp className="text-green-700 text-4xl" />
          <span>Checkout Successfully</span>
        </p>
        <div className="flex gap-3 justify-center items-center sm:flex-row flex-col">
          <Button>
            <Link to={"/"}>go home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
