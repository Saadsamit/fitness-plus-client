import Container from "@/components/Container/Container";
import Benefits from "@/components/home/Benefits";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HomeBanner from "@/components/home/HomeBanner";
import ImageGallery from "@/components/home/ImageGallery";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Categories />
      <FeaturedProducts />
      <Container>
        <Benefits />
        <ImageGallery />
      </Container>
    </div>
  );
};

export default Home;
