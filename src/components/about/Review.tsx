import { SwiperSlide } from "swiper/react";
import Loading from "../Loading/Loading";
import HandleError from "../HandleError/HandleError";
import Carousel from "./Carousel";
import { useGetReviewQuery } from "@/redux/features/About/aboutApi";
interface TReview {
  _id: string;
  rating: number;
  name: string;
  description: string;
}

const Review = () => {
  const { data, isLoading } = useGetReviewQuery(null);
  if (isLoading) {
    return <Loading className="pt-24" />;
  }
  return (
    <div>
      <HandleError arr={data?.data}>
        <h3 className="text-3xl font-bold text-textColor mb-10 text-center">
          Customer Testimonials
        </h3>
        <Carousel>
          {data?.data?.map((item: TReview) => (
            <SwiperSlide key={item._id}>
              <div className="block p-6 min-h-36 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  {item?.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item?.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Carousel>
      </HandleError>
    </div>
  );
};

export default Review;
