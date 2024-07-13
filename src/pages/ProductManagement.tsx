import Banner from "@/components/Banner/Banner";
import Container from "@/components/Container/Container";
import HandleError from "@/components/HandleError/HandleError";
import Loading from "@/components/Loading/Loading";
import MySelect from "@/components/MySelect/MySelect";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/ui/Pagination";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/Product/productApi";
import { TProduct } from "@/types/TProducts";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductManagement = () => {
  const [deleteProduct] = useDeleteProductMutation();
  const [limit, setLimit] = useState("10");
  const [currentPage, setCurrentPage] = useState(0);
  const query = `limit=${limit}&page=${currentPage + 1}`;
  const { data, isLoading, refetch } = useGetAllProductsQuery(query);
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isLoading) {
    return <Loading />;
  }
  const totalPage = Math.ceil(data?.count / Number(limit)) || 0;
  const pageCount = [...Array(totalPage).keys()];
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "The Product will be deleted Permanently",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#405D72",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire({
          title: "Deleted!",
          text: "The Product has been deleted",
          icon: "success",
        });
      }
    });
  };
  const limitData = [
    { name: "10" },
    { name: "15" },
    { name: "20" },
    { name: "25" },
    { name: "30" },
    { name: "35" },
    { name: "40" },
  ];
  return (
    <div>
      <Banner title="Product Management" />
      <Container className="pt-24">
        <h2 className="capitalize font-bold text-3xl text-center sm:mb-0 mb-4 text-textColor">
          Product Management
        </h2>
        <div className="flex flex-wrap justify-between">
          <div>
            <MySelect
              data={limitData}
              placeholder="Limit"
              setData={setLimit}
              value={limit}
            />
          </div>
          <div className="text-end">
            <Button>
              <Link to={"/add-Product"}>
                <IoMdAdd />
              </Link>
            </Button>
          </div>
        </div>
        <HandleError arr={data?.data}>
          <div className="relative mt-10 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((item: TProduct) => (
                  <tr className="odd:bg-white text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item?.name}
                    </th>
                    <td className="px-6 py-4">{item?.category}</td>
                    <td className="px-6 py-4">${item?.price}</td>
                    <td className="px-6 py-4">
                      <div className="space-x-4">
                        <Button size={"sm"}>
                          <Link to={`/update-Product/${item?._id}`}>
                            Update
                          </Link>
                        </Button>
                        <Button
                          onClick={() => handleDelete(item?._id as string)}
                          size={"sm"}
                          variant={"destructive"}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pt-10 flex justify-center">
            <Pagination
              currentPage={currentPage}
              pageCount={pageCount}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </HandleError>
      </Container>
    </div>
  );
};

export default ProductManagement;
