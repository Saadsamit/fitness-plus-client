import { TCategorie } from "@/types/TCategorie";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

const Categorie = ({ data }: { data: TCategorie }) => {
  const { name, image } = data;
  const style: CSSProperties = {
    background: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={style} className="relative rounded-2xl h-[250px]">
      <div className="absolute rounded-2xl inset-0 opacity-65 bg-black"></div>
      <div className="relative z-10 text-white space-y-4 flex flex-col text-center justify-center items-center h-full">
        <Link
          to={`/products?categorie=${name}`}
          className="text-2xl font-bold capitalize hover:underline"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

export default Categorie;
