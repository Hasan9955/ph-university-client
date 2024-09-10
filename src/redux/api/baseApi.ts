import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        //  baseUrl: 'https://ph-university-server-weld.vercel.app/api/v1',
         baseUrl: 'http://localhost:3000/api/v1',
         credentials: 'include'
         }),
    endpoints: () => ({ })
})