


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Homepage from "./pages/homepage";
import RaasPage from "./pages/Raas";
import PayperHire from "./pages/payperhire";
import FractionalHiring from "./pages/fractionalhiring";
import ContactUs from "./pages/contactus";




export default function App() {

 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Raas" element={<RaasPage />} />
          <Route path="/FractionHiring" element={<FractionalHiring />} />
          <Route path="/Payperhire" element={<PayperHire />} />
          <Route path="/ContactUs" element={<ContactUs/>}/>
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
