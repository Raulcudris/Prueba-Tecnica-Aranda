import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import menu from '../assets/icons/icon_menu.svg';
import shopping_cart from '../assets/icons/icon_shopping_cart.svg';
import logo from '../assets/logos/Logo-aranda.svg';

const Header = () => {
    const baseUrl = "https://localhost:44398/api/Products";
    
    const baseUrlCate = "https://localhost:44398/api/Categories";

    const [dataProducts , setDataProducts] = useState([]);


    const [dataCategories , setDataCategories] = useState([]);

    //Estado para el modal
    const [modalInsertarProducts, setModalInsertarProducts]=useState(false);

     //Estado para el modal
     const [modalInsertarCategoria, setModalInsertarCategoria]=useState(false);

    //Estado para el modal para editar
    const [modalEditar, setModalEditar]=useState(false);

     //Estado para el modal
    const [modalEliminar, setModalEliminar]=useState(false);

    //Peticion Get (Traer todos los datos del Api)
    const peticionesGet=async()=>{
        await axios.get(baseUrl)
        .then(Response =>{
            setDataProducts(Response.dataProducts);
        }).catch(error =>{
        console.log(error);
        })
    }

    const [productSeleccionado,setProductSeleccionado]= useState({
        name:'',
        description:'',
        categ_Id:'',
        image:null            
      })

      const [categoriaSeleccionado,setCategoriaSeleccionado]= useState({
        name:'',
        description:''      
      })
 //Abrir el modal
 const abrirCerrarModalInsertarProducts=()=>{
    setModalInsertarProducts(!modalInsertarProducts);
    }

     //Abrir el modal
 const abrirCerrarModalInsertarCategoria=()=>{
    setModalInsertarCategoria(!modalInsertarCategoria);
    }
  
  //Abrir el modal
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }
  
  //Abrir el modal
  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }


    //Peticion Post products (Api)
    const peticionesPost_products = async()=>{  
      const data = new FormData();
      data.append("file",dataProducts)  
    await axios.post(baseUrl, productSeleccionado)
   .then(Response =>{
      setDataProducts(dataProducts.concat(Response.dataProducts));
      abrirCerrarModalInsertarProducts();
    }).catch(error =>{
      console.log(error);
    })
  }

    //Peticion Post categoria (Api)
    const peticionesPost_categoria=async()=>{
        await axios.post(baseUrlCate, categoriaSeleccionado)
        .then(Response =>{
          setDataCategories(dataCategories.concat(Response.dataCategories));
          abrirCerrarModalInsertarCategoria();
        }).catch(error =>{
          console.log(error);
        })
      }

      
  const seleccionarProducts=(product,caso)=>{
    setProductSeleccionado(product);
    (caso==="Editar")?
    abrirCerrarModalEditar():abrirCerrarModalEliminar();
  }
    useEffect(()=>{
      peticionesGet();
    },[])

    const handleChangeProducts=e=>{
        const {name, value} = e.target;
        setProductSeleccionado({
          ...productSeleccionado,
          [name]:value
    
        });
        console.log(productSeleccionado);
      }

      const handleChangeCategoria=e=>{
        const {name, value} = e.target;
        setCategoriaSeleccionado({
          ...categoriaSeleccionado,
          [name]:value
    
        });
        console.log(categoriaSeleccionado);
      }
  return (
    <>
     <nav>
        <img src={menu} alt="menu" class="menu"/>
        <div class="navbar-left">
            <img src={logo} alt="logo" class="logo"/>
            <ul>
                <li>
                 < a onClick={()=>abrirCerrarModalInsertarProducts()}>Productos</a>
                </li>
                <li>
                < a onClick={()=>abrirCerrarModalInsertarCategoria()}>Categorias</a>
                </li>
                <br />
                <li>
                    <input type="email" class="form-control" 
                           id="exampleInputEmail1" aria-describedby="emailHelp" 
                           placeholder="Buscar Producto.."/>
                </li>
            </ul>
        </div>

        <div class="navbar-right">  
            <ul>
                <li class="navbar-email">Aranda@example.com</li>
                <li class="navbar-shopping-cart">
                    <img src={shopping_cart} alt="shopping-cart"/>
                    <div>0</div>
                </li>
            </ul>          
        </div>    
    </nav>
    <br/>       

    {/* Modal de Insertar Productos */}
    <Modal isOpen={modalInsertarProducts}>
            <ModalHeader>Añadir Producto </ModalHeader>
            <ModalBody>
              <div className='form-group'>
                    <br/>
                    <th>Nombre :</th>
                    <br/>
                    <input type="text" className='form-control' name='name' onChange={handleChangeProducts}/>
                    <br/>
                    <th>Descripcion:</th>    
                    <br/>
                    <input type="text" className='form-control' name='description'  onChange={handleChangeProducts} />
                    <br/>
                    <th>Categoria:</th>    
                    <br/>
                    <input type="text" className='form-control' name='categ_Id'  onChange={handleChangeProducts} />
                    <br/>
                    <th>Imagen:</th>    
                    <br/>
                    <input type="file" className='form-control' name='image'  onChange={(e) => setDataProducts(e.target.files[0])} />
                    <br/>
              </div>
            </ModalBody>
            <ModalFooter>
              <button className='btn btn-primary' onClick={()=>peticionesPost_products()} >Guardar</button>
              <button className='btn btn-danger' onClick={()=>abrirCerrarModalInsertarProducts()} >Cancelar</button>
            </ModalFooter>
          </Modal>

        {/* Modal de Insertar Categoria */}
        <Modal isOpen={modalInsertarCategoria}>
                    <ModalHeader>Añadir Categoria </ModalHeader>
                    <ModalBody>
                    <div className='form-group'>
                            <br/>
                            <th>Nombre :</th>
                            <br/>
                            <input type="text" className='form-control' name='name' onChange={handleChangeCategoria}/>
                            <br/>
                            <th>Descripcion:</th>    
                            <br/>
                            <input type="text" className='form-control' name='description'  onChange={handleChangeCategoria} />
                            <br/>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button className='btn btn-primary' onClick={()=>peticionesPost_categoria()} >Guardar</button>
                    <button className='btn btn-danger' onClick={()=>abrirCerrarModalInsertarCategoria()} >Cancelar</button>
                    </ModalFooter>
                </Modal>
    </>
  )
}

export default Header