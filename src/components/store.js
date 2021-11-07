import Product from './products';
import "./store.css"
import tv from  "../img/tv.png"


function Store(){
  return(
    <div>
      <div class="products">
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
       </div>
    </div>
  );
}
export default Store