import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";


const baseQuery = fetchBaseQuery({
    //  baseUrl: 'https://ph-university-server-weld.vercel.app/api/v1',
    baseUrl: 'http://localhost:3000/api/v1',
    credentials: 'include',
    // set the token with every query request by using prepareHeaders;
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;

        if (token) {
            headers.set('authorization', `${token}`)
        }

        return headers;

    }
})

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    endpoints: () => ({})
})
