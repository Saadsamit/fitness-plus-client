import aboutImg from "@/assets/about.jpg";
const CompanyOverview = () => {
  return (
    <div className="flex items-center md:flex-row flex-col mb-24">
      <div className="md:w-1/2 p-3">
        <h3 className="text-3xl font-bold text-textColor mb-10 md:text-start text-center">Overview</h3>
        <p className="font-medium">
          Founded in the early 2000s, Fitness Equipment and Accessories expanded
          from a small local store to a nationwide brand, renowned for quality
          and innovation in fitness products. To empower healthier lives by
          providing high-quality, safe, and effective fitness equipment and
          accessories with exceptional customer service. To be a global leader
          in fitness, inspiring a worldwide community and making fitness
          accessible to all.
        </p>
      </div>
      <div className="md:w-1/2">
        <div className="size-full md:mx-5">
          <img
            className="object-cover size-full block rounded-t-lg md:h-auto rounded-sm md:rounded-s-lg"
            src={aboutImg}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
