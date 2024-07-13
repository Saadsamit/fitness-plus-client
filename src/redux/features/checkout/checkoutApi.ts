import baseApi from "@/redux/api/baseApi";
import { TCart } from "@/types/TCart";

const checkoutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCheckout: builder.mutation({
      query: (data) => ({ url: "/checkout", method: "POST", body: data }),
      invalidatesTags: (result, error, data) =>
        data?.products.map((item: TCart) => ({
          type: "Product",
          id: item.productId,
        })),
    }),
  }),
});

export const { useCreateCheckoutMutation } = checkoutApi;
