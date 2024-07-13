import Banner from "@/components/Banner/Banner";
import Container from "@/components/Container/Container";
import HandleError from "@/components/HandleError/HandleError";
import Loading from "@/components/Loading/Loading";
import MySelect from "@/components/MySelect/MySelect";
import ProductCart from "@/components/Product/ProductCart";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/ui/Pagination";
import { useGetCategorieQuery } from "@/redux/features/Categorie/categorieApi";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import { TProduct } from "@/types/TProducts";
import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categorieQuery = searchParams.get("categorie");
  const [currentPage, setCurrentPage] = useState(0);
  const [categorie, setCategorie] = useState(categorieQuery || "");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");
  const { data: categorieData, isLoading: categorieLoading } =
    useGetCategorieQuery(`fields=name`);
  const limit = 8;
  let query = `limit=${limit}&page=${currentPage + 1}`;

  if (categorie) {
    query = query.concat(`&category=${categorie}`);
  }
  if (price) {
    query = query.concat(`&sort=${price}`);
  }
  if (search) {
    query = query.concat(`&search=${search}`);
  }
  const { data, isLoading, refetch } = useGetAllProductsQuery(query);
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isLoading || categorieLoading) {
    return <Loading />;
  }
  const priceSorting = [
    {
      value: "price",
      title: "Low to High",
    },
    {
      value: "-price",
      title: "High to Low",
    },
  ];
  const handleReset = () => {
    setCategorie("");
    setPrice("");
    setSearch("");
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchData = (e.target as HTMLFormElement).search.value;
    setSearch(searchData);
  };

  const totalPage = Math.ceil(data?.count / limit) || 0;
  const pageCount = [...Array(totalPage).keys()];
  return (
    <div>
      <Banner title="Products" />
      <HandleError arr={data?.data}>
        <Container className="pt-24">
          <form onSubmit={handleSubmit}>
            <div className="md:flex flex-wrap flex-row-reverse justify-between">
              <div className="md:w-96">
                <div className="relative mb-10">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    name="search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search "
                    required
                  />
                  <Button
                    type="submit"
                    className="absolute end-2.5 bottom-[7px]"
                  >
                    Search
                  </Button>
                </div>
              </div>
              <div className="space-y-4 grid">
                <MySelect
                  data={categorieData?.data}
                  placeholder="Select a Categorie"
                  setData={setCategorie}
                  value={categorie}
                />
                <MySelect
                  data={priceSorting}
                  placeholder="Sort Price"
                  setData={setPrice}
                  value={price}
                />
                <Button type="reset" onClick={handleReset}>
                  Reset
                </Button>
              </div>
            </div>
          </form>
          <h2 className="capitalize font-bold text-3xl text-center text-textColor">
            Products
          </h2>
          <div className="pt-10 grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            {data?.data?.map((item: TProduct) => (
              <ProductCart key={item._id} data={item} />
            ))}
          </div>
          <div className="pt-10 flex justify-center">
            <Pagination
              currentPage={currentPage}
              pageCount={pageCount}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </Container>
      </HandleError>
    </div>
  );
};

export default Products;
