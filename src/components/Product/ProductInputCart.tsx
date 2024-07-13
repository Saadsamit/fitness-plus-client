import { TProduct } from "@/types/TProducts";
import { SubmitHandler, useForm, UseFormReset } from "react-hook-form";
import { Button } from "../ui/button";
import { useGetCategorieQuery } from "@/redux/features/Categorie/categorieApi";
import Loading from "../Loading/Loading";
import { TCategorie } from "@/types/TCategorie";

interface TProductInputCart {
  title: string;
  product?: TProduct;
  onSubmit: (data: TProduct, reset: UseFormReset<TProduct>) => Promise<void>;
}
const ProductInputCart = ({ title, product, onSubmit }: TProductInputCart) => {
  const { register, handleSubmit, reset } = useForm<TProduct>({
    defaultValues: product,
  });
  const { data, isLoading } = useGetCategorieQuery(`fields=name`);

  if (isLoading) {
    return <Loading />;
  }
  const handle: SubmitHandler<TProduct> = (data) => {
    const price = Number(data.price);
    const stock = Number(data.stock);
    const formData = { ...data, price, stock };
    onSubmit(formData, reset);
  };
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit(handle)}>
        <h5 className="text-xl font-medium text-textColor text-center capitalize dark:text-white">
          {title}
        </h5>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-1 ml-1 text-sm font-medium text-textColor dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Product Name"
            id="name"
            {...register("name", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-textColor block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="image"
            className="block mb-1 ml-1 text-sm font-medium text-textColor dark:text-white"
          >
            Image
          </label>
          <input
            type="text"
            placeholder="Enter Product Image Link"
            id="image"
            {...register("image", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-textColor block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="grid sm:grid-cols-2 items-end gap-5 mb-5">
          <div>
            <label
              htmlFor="price"
              className="block mb-1 ml-1 text-sm font-medium text-textColor dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              placeholder="Add Price"
              id="price"
              {...register("price", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-textColor block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="stock"
              className="block mb-1 ml-1 text-sm font-medium text-textColor dark:text-white"
            >
              Stock
            </label>
            <input
              type="number"
              placeholder="Add Stock"
              id="stock"
              {...register("stock", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-textColor block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="category"
            className="block mb-1 ml-1 text-sm font-medium text-textColor dark:text-white"
          >
            Category
          </label>
          <select
            id="category"
            {...register("category", { required: true })}
            className={`bg-gray-50 border w-full" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-textColor focus:border-textColor block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          >
            <option selected disabled value={""}>
              add Category
            </option>
            {data?.data.length ? (
              data?.data?.map((item: TCategorie) => (
                <option
                  value={item?.name}
                  className="capitalize"
                  key={item?.name}
                >
                  {item?.name}
                </option>
              ))
            ) : (
              <option selected disabled value={""}>
                no category found
              </option>
            )}
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-1 ml-1 text-sm font-medium text-textColor dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-textColor block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Description"
          ></textarea>
        </div>
        <Button className="w-full">Add Product</Button>
      </form>
    </div>
  );
};

export default ProductInputCart;
