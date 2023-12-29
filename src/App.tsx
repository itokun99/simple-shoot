// import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function DetailPage() {
  return (
    <div>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ESOP Stockbit" />
        <meta property="og:description" content="ESOP Stockbit" />
        <meta
          property="og:image"
          content="%PUBLIC_URL%/stockbit-logo-dark.svg"
        />
      </Helmet>
      <h1>Test Detail Page</h1>
    </div>
  );
}

function HomePage() {
  return <div>Home page</div>;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <div style={{ display: "flex", gap: 2 }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/detail">Detail</NavLink>
        </div>
        <Routes>
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
