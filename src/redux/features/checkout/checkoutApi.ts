import baseApi from "@/redux/api/baseApi";

const checkoutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCheckout: builder.mutation({
      query: (data) => ({ url: "/checkout", method: "POST", body: data }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const { useCreateCheckoutMutation } = checkoutApi;
