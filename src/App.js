import React from 'react';
import {Switch,Route,Link} from "react-router-dom";
import {Layout,Typography,Space} from 'antd';
import './App.css';
import { Navbar,Exchange,HomePage,News,CryptoCurrency,CryptoDetails} from './component';

const App=() =>{
  return (
    <div className="app">
       <div className="navbar">
        <Navbar />
       </div>
       <div className="main">
         <Layout>
           <div className="routes">
             <Switch>
               <Route exact path= "/">
                 <HomePage/>
               </Route>
               <Route exact path= "/exchanges"  >
                 <Exchange/>
                 </Route>
               <Route exact path= "/cryptocurrency"  >
                 <CryptoCurrency/>
                 </Route>
               <Route exact path= "/crypto/:coinId"  >
                 <CryptoDetails/>
                 </Route>
               <Route exact path= "/news"  >
                 <News/>
                 </Route>
             
             </Switch>
             </div>
         </Layout>

     

       <div className="footer">
    <Typography.Title className="footer" level={5} style={{color:"white",textAlign:"center"}}>
      Cryptoverse <br/>
      All rights are reserved
    </Typography.Title>
    <Space>
      <Link to="/">Home</Link>
      <Link to="/exchanges">Exchange</Link>
      <Link to="/news">New</Link>
    </Space>
       </div>
       </div>
    </div>
  );
}

export default App;
