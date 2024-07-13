import { SwiperSlide } from "swiper/react";
import Loading from "../Loading/Loading";
import { useGetTeamsQuery } from "@/redux/features/About/aboutApi";
import HandleError from "../HandleError/HandleError";
import Carousel from "./Carousel";

interface TTeam {
  _id: string;
  image: string;
  name: string;
  role: string;
}

const Team = () => {
  const { data, isLoading } = useGetTeamsQuery(null);
  if (isLoading) {
    return <Loading className="pt-24" />;
  }
  return (
    <div className="pb-24">
      <HandleError arr={data?.data}>
        <h3 className="text-3xl font-bold text-textColor mb-10 text-center">
          Our Team
        </h3>
        <Carousel>
          {data?.data?.map((item: TTeam) => (
            <SwiperSlide key={item._id}>
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg w-full" src={item?.image} alt="" />
                <div className="p-5 text-center">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item?.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item?.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </HandleError>
    </div>
  );
};

export default Team;
