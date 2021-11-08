import React, { Component } from 'react';
import Product from "./products"
import tv from  "../img/tv.png"
import "./home.css"

function Home() {
    return (
      <div class="m-20 w-full h-screen items-center">
        <div class="inline-flex">
          <input type="text" class=" border-2 mr-2 rounded  border-black "/>
        <input type="submit" class="bg-blue-300 rounded pr-2 pl-2" value="Search"/>
        </div>
        <h1 class="cursive text-lg">Shop with us and get the best deals from all your favourite stores</h1>
         {/* slideshow */}
         <div class="inline-flex relative">
           <div class="items-center">
              <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" class="w-full h-full"/>
           </div>
         </div>
         <div class="absolute grid grid-flow-cols grid-cols-3 place-items-center" >
          <Product 
            image={tv}
            name="image"
            description="image"
            price="image"/>
            <Product 
            image={tv}
            name="image"
            description="image"
            price="image"/>
            <Product 
            image={tv}
            name="image"
            description="image"
            price="image"/>
             <Product 
            image={tv}
            name="image"
            description="image"
            price="image"/>
            <Product 
            image={tv}
            name="image"
            description="image"
            price="image"/>
            <Product 
            image={tv}
            name="image"
            description="image"
            price="image"/> <Product 
            image={tv}
            name="image"
            description="image"
            price="image"/>
            <Product 
            image={tv}
            name="image"
            description="image"
            price="image"/>
            <Product 
            image={tv}
            name="image"
            description="image"
            price="image"/>
          </div>
      </div>
    );
  
}

export default Home;