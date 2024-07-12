import Categorie from "./Categorie";
import { useGetCategorieQuery } from "@/redux/features/Categorie/categorieApi";
import Loading from "../Loading/Loading";
import Container from "../Container/Container";

const Categories = () => {
  const { data, isLoading } = useGetCategorieQuery(null);
  if (isLoading) {
    return <Loading className="pt-24" />;
  }
  return (
    <Container className="pt-24">
      <h2 className="capitalize font-bold text-3xl text-center text-textColor">
        categories
      </h2>
      <div className="pt-10 grid md:grid-cols-2 gap-4">
        {data?.data?.map((item) => (
          <Categorie key={item._id} data={item} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
