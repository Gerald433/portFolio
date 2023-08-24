import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "../src/assets/styles/index.scss";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import ProjetsList from "./pages/ProjetsList/ProjetsList";
import Apropos from "./pages/Apropos/Apropos";
import Contact from "./pages/Contact/Contact";
import Projet from "./pages/Projet/Projet";
import Error from "./pages/Error/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ProjetsList />} />
      <Route path="/projets/:projetId" element={<Projet />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/a-propos" element={<Apropos />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
