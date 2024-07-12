import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HomeBanner from "@/components/home/HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Categories />
      <FeaturedProducts/>
    </div>
  );
};

export default Home;
