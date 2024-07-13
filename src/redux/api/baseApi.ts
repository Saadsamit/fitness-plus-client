import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.serverUrl }),
  tagTypes: ["Product"],
  endpoints: () => ({}),
});

export default baseApi;
