

function Products({image, name, description, price}){
 return(
  <div class="">
  <img src={image} alt="product image" />
  <h3>{name}</h3>
  <p>{description}</p>
  <p>{price}</p>  
</div>
 );
}
export default Products;