

function Products({image, name, description, price}){
  <div class="">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <p>{price}</p>  
  </div>
}
export default Products;