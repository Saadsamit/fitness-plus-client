import baseApi from "@/redux/api/baseApi";

const aboutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: () => `/teams`,
    }),
    getReview: builder.query({
      query: () => `/reviews`,
    }),
  }),
});

export const { useGetTeamsQuery, useGetReviewQuery } = aboutApi;
