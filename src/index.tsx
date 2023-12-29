import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { hydrate, render } from "react-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
//
const helmetContext = {};
const App1 = () => (
  <React.StrictMode>
      <HelmetProvider context={helmetContext}>
    <App />
    </HelmetProvider>
  </React.StrictMode>
);


// const html = renderToString(app);

// const { helmet } = helmetContext;

//
const root = document.getElementById("root");

if (root?.hasChildNodes()) {
  hydrate(<App1 />, root);
} else {
  render(<App1 />, root);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
