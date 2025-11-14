import React from "react";
import Navbar from "../Components/NavBar";
import Footer from "../Footer/Footer";
import Enquiries from "./Enquiries";
const page =() => {
    return(
        <div>
            <Navbar/>
            <Enquiries/>
            <Footer/>
        </div>
    )
}

export default page;