import Product from './products';
import tv from  "../img/tv.png"


function Store(){
  return(
    <div>
      <div class="grid">
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