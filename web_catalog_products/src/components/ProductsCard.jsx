import React from "react";
import imageproduct1 from '../assets/img/cienanosdesoledad.jpg';
import imageproduct2 from '../assets/img/HornoMicroonda.png';
import imageproduct3 from '../assets/img/Guantes.jpg';
import icons from '../assets/icons/bt_add_to_cart.svg';

const productsCard = () => {
  return (
    <>
      <section class="main-container">
        <div class="cards-container">  
          <div class="product-card">
                <img src={imageproduct1} alt="" />
                <div class="product-info">
                <div>
                    <p>$120,00</p>
                    <p>$Libro</p>
                </div>
                <figure>
                    <img src={icons} alt="card" />
                </figure>
            </div>
          </div>
          <div class="product-card">
            <img
              src={imageproduct2} alt="" />
                <div class="product-info">
                     <div>
                            <p>$500,00</p>
                            <p>$Horno Microondas</p>
                      </div>
                <figure>
                    <img src={icons} alt="card" />
                </figure>
             </div>
          </div>
          <div class="product-card">
                <img src={imageproduct3} alt=""  />
                <div class="product-info">
                <div>
                    <p>$5,00</p>
                    <p>$Guantes</p>
                </div>
                <figure>
                    <img src={icons} alt="card" />
                </figure>
            </div> 
          </div>

          <div class="product-card">
                <img src={imageproduct1} alt=""  />
                <div class="product-info">
                <div>
                    <p>$5,00</p>
                    <p>$Guantes</p>
                </div>
                <figure>
                    <img src={icons} alt="card" />
                </figure>
            </div> 
          </div>

          <div class="product-card">
                <img src={imageproduct2} alt=""  />
                <div class="product-info">
                <div>
                    <p>$5,00</p>
                    <p>$Guantes</p>
                </div>
                <figure>
                    <img src={icons} alt="card" />
                </figure>
            </div> 
          </div>

          <div class="product-card">
                <img src={imageproduct3} alt=""  />
                <div class="product-info">
                <div>
                    <p>$5,00</p>
                    <p>$Guantes</p>
                </div>
                <figure>
                    <img src={icons} alt="card" />
                </figure>
            </div> 
          </div>
          <div class="product-card">
                <img src={imageproduct1} alt=""  />
                <div class="product-info">
                <div>
                    <p>$5,00</p>
                    <p>$Guantes</p>
                </div>
                <figure>
                    <img src={icons} alt="card" />
                </figure>
            </div> 
          </div>
          <div class="product-card">
                <img src={imageproduct3} alt=""  />
                <div class="product-info">
                <div>
                    <p>$5,00</p>
                    <p>$Guantes</p>
                </div>
                <figure>
                    <img src={icons} alt="card" />
                </figure>
            </div> 
          </div>
          <div class="product-card">
                <img src={imageproduct1} alt=""  />
                <div class="product-info">
                <div>
                    <p>$5,00</p>
                    <p>$Guantes</p>
                </div>
                <figure>
                    <img src={icons} alt="card" />
                </figure>
            </div> 
          </div>


        </div>       
      </section>
    </>
  );
};

export default productsCard;
