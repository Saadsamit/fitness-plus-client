import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center space-y-4">
        <h3 className="text-textColor text-7xl font-bold capitalize">404</h3>
        <p className="text-2xl fond-bold capitalize">"page not found"</p>
        <div className="flex gap-3 justify-center items-center sm:flex-row flex-col">
          <Button>
            <Link to={"/"}>go home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
