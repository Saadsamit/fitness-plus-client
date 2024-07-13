import baseApi from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (query) => `/product/all?${query}`,
      providesTags: ["Product"],
    }),
    getAProducts: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: (result) => {
        return [{ type: "Product", id: result?.data?._id }];
      },
    }),
    addProduct: builder.mutation({
      query: (data) => ({ url: "/product", method: "POST", body: data }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({ url: `/product/${id}`, method: "DELETE" }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => {
        return {
          url: `/product/${data?.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
