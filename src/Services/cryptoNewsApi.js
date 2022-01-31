import {createApi,fetchBaseQuery} from  '@reduxjs/toolkit/query/react';

const cryptoNewsHeader={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '2d36f708d2msh52a447f5a9757fdp1a2597jsn4fd835c463cf'
}

const baseUrl='https://bing-news-search1.p.rapidapi.com';

const createRequest=(url)=>({url,headers: cryptoNewsHeader});

export const cryptoNewsApi=createApi({
    reducerPath :"cryptoNewsApi",
    baseQuery :fetchBaseQuery({ baseUrl }),
      endpoints : (builder)=>({
        getCryptoNews:builder.query({
          query:({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
      })


  });

  export  const {
    useGetCryptoNewsQuery
  } = cryptoNewsApi;


