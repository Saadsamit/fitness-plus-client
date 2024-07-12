import baseApi from "@/redux/api/baseApi";

const categorieApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategorie: builder.query({
      query: (fields) => `/categories?${fields}`,
    }),
  }),
});

export const { useGetCategorieQuery } = categorieApi;
