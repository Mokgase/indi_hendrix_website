import React from "react";
import Paintings from "../Paintings/Paintings";
import Navbar from "../../Components/NavBar"
import Footer from "../../Footer/Footer"
const page =() => {
    return(
        <div>
            <Navbar/>
            <Paintings/>
            <Footer/>
        </div>
    )
}

export default page;