import BenefitsImg from "@/assets/Benefits.jpeg";
const Benefits = () => {
  return (
    <div className="mb-24">
      <div className="flex items-center md:flex-row-reverse flex-col mb-24">
        <div className="md:w-1/2 p-3">
          <h3 className="text-3xl font-bold text-textColor mb-10 md:text-start text-center">
            Overview
          </h3>
          <p className="font-medium">
            Our fitness equipment is designed to help you achieve peak
            performance. Whether you're a beginner or a seasoned athlete, our
            products enhance your workouts, enabling you to reach your fitness
            goals faster.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="size-full md:mr-5">
            <img
              className="object-cover size-full block rounded-t-lg md:h-auto rounded-sm md:rounded-s-lg"
              src={BenefitsImg}
              alt={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
