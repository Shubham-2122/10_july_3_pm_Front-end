import React from "react";
import Boots from "./Boots/Boots";
import ReactBoot from "./Boots/ReactBoot";
import Footer from "./Boots/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
import NotFound from "./Layout/Pages/NotFound";
// import Effect from "./Effect/Effect";
// import UserData from "./Effect/UserData";
// import Userac from "./Effect/Userac";
// import Product from "./Effect/Product";
// import MainData from "./Context/MainData";
// import ClassCompo from "./Component/ClassCompo";
// import FuncCompo from "./Component/FuncCompo";
// import Hello from "./jsx/Hello";
// import Style from "./style/Style";
// import MainProps from "./Props/MainProps";
// import MainState from "./State/MainState";
// import FormData from "./FormHaldling/FormData";
// import FormObj from "./FormHaldling/FormObj";

function App() {
    return (
        <BrowserRouter>
        <div>

            {/* component */}
            {/* <ClassCompo /> */}
            {/* <FuncCompo /> */}


            {/* jsx */}
            {/* <Hello /> */}

            {/* css */}
            {/* <Style /> */}

            {/* props */}
            {/* <MainProps /> */}

            {/* state */}
            {/* <MainState /> */}

            {/* hadling form */}
            {/* <FormData /> */}
            {/* <FormObj /> */}

            {/* UseEffect */}
            {/* <Effect /> */}
            {/* <UserData /> */}
            {/* <Userac /> */}

            {/* <Product /> */}

            {/* <MainData /> */}

            {/* <Boots /> */}
            {/* <ReactBoot /> */}
            {/* <Footer /> */}
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<NotFound />} />
            </Routes>

        </div>
        </BrowserRouter>
    )
}

export default App