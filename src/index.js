import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>

    <h1 className='heading_style'>list of top 5 NetFlix Series in 2020</h1>
    <BrowserRouter>

      <Routes>

        <Route exact path="/" element={<App />}></Route>

      </Routes>

    </BrowserRouter>


  </>

)