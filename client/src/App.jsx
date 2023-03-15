import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";
// import { logo } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <header
        className="w-full flex justify-between 
      items-center bg-white border-b border-b-[#e6ebf4]
      px-4 py-4 sm:px-8
      "
      >
        <Link to="/">
          {/* <img src={logo} alt="" className="w-28 object-contain" /> */}
          <div className="w-28 font-mono text-[30px] font-semibold flex justify-center items-center ">
            <span className="text-[black]">S</span>.
            <span className="text-[gray] ">AI</span>
          </div>
        </Link>

        <Link
          to="/create-post"
          className="font-inter text-white bg-[#6469ff] px-4 py-2 rounded font-medium"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 w-full min-h-[calc(100vh-73px)] px-4 py-4 bg-[#f9fafe]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
