

function Products({image, name, description, price}){
 return(
  <div class="">
   <div class="bg-gray-400 w-1/3 m-14 text-center">
    <div class="card-image p-2">
     <img src={image}/>
    </div>
    <div class="">
     <p>{name}</p>
     <p>{description}</p>
     <p>{price}</p>
    </div>
   </div>
  </div>
 );
}
export default Products;