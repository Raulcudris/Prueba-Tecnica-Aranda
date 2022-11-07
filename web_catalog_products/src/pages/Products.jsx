import React from 'react'
import ProductsCard from '../components/ProductsCard';
import '../styles/app.css';
const Products = () => {
  return (
    <>
         <section class="main-container">
            <div class="cards-container">  
                <ProductsCard />             
            </div>
        </section>
    </>
    )
}

export default Products