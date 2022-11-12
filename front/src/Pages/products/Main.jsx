import React, { useState } from "react";
import Product from "./Product";

function Main(props){
    
    return(
        <div className="block col-2">
            <h2>Products</h2>
            <Product></Product>
        </div>
    )
}
export default Main