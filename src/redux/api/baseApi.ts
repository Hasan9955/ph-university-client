import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";


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


const baseQueryWithRefreshToken : BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions) : Promise<any> => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error?.status === 401) {
        const res = await fetch('http://localhost:3000/api/v1/auth/refresh-token', {
            method: "POST",
            credentials: 'include'
        })

        const data = await res.json();

        if (data?.data?.accessToken) {
            //get the user from redux local store
            const user = (api.getState() as RootState).auth.user;

            // set the token into the redux local store
            api.dispatch(
                setUser({
                    user,
                    token: data.data.accessToken
                })
            )

            result = await baseQuery(args, api, extraOptions)
        } else{
            api.dispatch(logout())
        }
    }

    return result;
}

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({})
})
