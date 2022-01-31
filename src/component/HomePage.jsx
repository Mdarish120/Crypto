import React from 'react';
import millify from "millify";
import {Typography,Col,Row,Statistic} from "antd";
import {Link} from "react-router-dom";
import { useGetCryptosQuery} from "../Services/cryptoApi";
import CryptoCurrency from './CryptoCurrency';
import News from "./News";
import Loader from './Loader';


const HomePage=()=>{

       const {data,isFetching} =useGetCryptosQuery(10);
       const globalStatus=data?.data?.stats;

  
   if(isFetching) return <Loader/>
   

  const {Title} =Typography;
    return(
        <>
      <Title level={2} className="heading">
      Global Cryptos stats
      </Title>
      <Row>
          <Col span={12} className="col"><Statistic title="Total Crytocurrencies"  value={globalStatus.total}/> </Col>
          <Col span={12}  className="col"><Statistic title="Total Exchangrs"  value={millify(globalStatus.totalExchanges)} /> </Col>
          <Col span={12}  className="col"><Statistic title="Total Market Cap"  value={millify(globalStatus.totalMarketCap)}/> </Col>
          <Col span={12}  className="col"><Statistic title="Total 24h Volume"  value={millify(globalStatus.total24hVolume)}/> </Col>
          <Col span={12}  className="col"><Statistic title="Total Market"  value={globalStatus.totalMarkets}/> </Col>
          
         
      </Row>
      <div className="home-heading-container">
        <Title level ={2} className="home-title"> Top 10 CryptoCurrencies </Title>
        <Title level ={3} className="show more"> <Link to="/cryptocurrency">Show more</Link></Title>

      </div>
     

       <CryptoCurrency  simplified/>
       <div className="home-heading-container">
        <Title level ={2} className="home-title"> Latest Crypto  News</Title>
        <Title level ={3} className="show more"> <Link to="/news">Show more</Link></Title>
         
      </div>
      <News simplified/>
     
       
        </>

    );
}


export default HomePage;