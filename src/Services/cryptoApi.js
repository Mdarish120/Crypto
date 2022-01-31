
import {createApi,fetchBaseQuery} from  '@reduxjs/toolkit/query/react';

  const cryptoApiHeader={

    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '2d36f708d2msh52a447f5a9757fdp1a2597jsn4fd835c463cf'

  }

    const baseUrl="https://coinranking1.p.rapidapi.com";
     const createRequest=(url)=>({url,headers: cryptoApiHeader});

    export const cryptoApi=createApi({
      reducerPath :"cryptoApi",
      baseQuery :fetchBaseQuery({ baseUrl }),
        endpoints : (builder)=>({
          getCryptos:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
          }),
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
          getCryptoDetails:builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
          getCryptoHistory:builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`/coin/${coinId}/history/${timeperiod}`),
          }),

        }),
    });

    export  const {
      useGetCryptosQuery,
      useGetExchangesQuery,
      useGetCryptoDetailsQuery,
      useGetCryptoHistoryQuery
    } = cryptoApi;


