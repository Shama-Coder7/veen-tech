import React from "react";
import web from "./images/home.gif";
import Common from "./Common";

const Home = () =>{
return (
    <>
    <Common 
    name="Welcome to Home Page Of "
    imgsrc={web} 
    visit="/service" 
    btname="Get Started"/>
    </>
);
};

export default Home;