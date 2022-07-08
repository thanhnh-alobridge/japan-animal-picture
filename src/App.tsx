import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

const Page1 = React.lazy(() => import("./pages/page1"));
const Page2 = React.lazy(() => import("./pages/page2"));
const Page3 = React.lazy(() => import("./pages/page3"));
const Page4 = React.lazy(() => import("./pages/page4"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />}></Route>
        <Route path="/2" element={<Page2 />}></Route>
        <Route path="/3" element={<Page3 />}></Route>
        <Route path="/4" element={<Page4 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
