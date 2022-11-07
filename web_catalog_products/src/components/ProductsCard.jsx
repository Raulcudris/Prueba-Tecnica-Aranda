import React, { useEffect, useState } from "react";
import imageproduct1 from '../assets/img/cienanosdesoledad.jpg';
import icons from '../assets/icons/bt_add_to_cart.svg';
import '../styles/app.css';

const ProductsCard = () => {
  const baseUrl = "https://localhost:44398/api/Products";
  const [products,setProducts] = useState();

  const fetchApi = async () =>{
  const response = await fetch(baseUrl);
  const responseJSON = await response.json();
  setProducts(responseJSON);
};
useEffect(()=>{
  fetchApi()
},[]);

  return (
    <>
    {!products ? 'Cargando...' : 
        products.map((products , index)=>{
          return (
           <div class="product-card">
             <img src={products.image} alt="" />
               <div class="product-info">
                <p>{products.name}</p>
                <p>{products.Description}</p>
                <div>
          </div>
          <figure>
              <img src={icons} alt="card" />
          </figure>
         </div>
      </div>)
        })

    }
    
    </>   
  );
};

export default ProductsCard;
