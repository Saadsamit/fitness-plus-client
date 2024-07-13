import CompanyOverview from "@/components/about/CompanyOverview";
import Contact from "@/components/about/Contact";
import Review from "@/components/about/Review";
import Team from "@/components/about/Team";
import Banner from "@/components/Banner/Banner";
import Container from "@/components/Container/Container";

const About = () => {
  return (
    <div>
      <Banner title="about" />
      <Container className="pt-24">
        <CompanyOverview />
        <Team />
        <Review />
        <Contact/>
      </Container>
    </div>
  );
};

export default About;
