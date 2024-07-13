import baseApi from "@/redux/api/baseApi";
import { TProduct } from "@/types/TProducts";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (query) => `/product/all?${query}`,
      providesTags: (result) => {
        const product = result.data;
        if (Array.isArray(result)) {
          return [
            ...product.map((item: TProduct) => ({
              type: "Product",
              id: item._id,
            })),
            { type: "Product", id: "LIST" },
          ];
        }
        return [{ type: "Product", id: "LIST" }];
      },
    }),
    getAProducts: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetAProductsQuery } = productApi;
