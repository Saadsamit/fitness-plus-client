import baseApi from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (query) => `/product/all?${query}`,
    }),
    getAProducts: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetAProductsQuery } = productApi;
