//Trabajando en Componentes con estado

import React,{Component} from 'react';
import  ProductList from './ProductList';
import Swal from 'sweetalert2';

class Product extends Component {
    constructor(){
        // aca recibe los datos que vienen de otro lugar
        super();
        this.state ={
            productos:[]
        }
    }
    //mensaje de front de la libreria swal
    mensaje(){
        Swal.fire({
            title:'Gracias por consultar!',
            text:'Estos son nuestros productos!',
            icon:'success',
            timer:'3000'}
          )
    }

    //Componenctes ciclo de vida - MOnto _ Actualizo - Desmonto
    //Montaje -- componentDidMount - Es un método que comunica con nuestra Api o db
    componentDidMount(){
        fetch('/api/products')
        .then(respuesta=>{
            return respuesta.json()
        })
        .then(productos=>{
                //console.log(productos) 
          this.setState({productos:productos.data.products})      
        })
        .catch (error=>console.log(error));
    }

    render(){
        return (
            <React.Fragment>
            {/*<!-- PRODUCTS LIST -->*/}
            <h1 onClick={this.mensaje} className="h3 mb-2 text-gray-800">All the products in the Database</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Price</th>
                                    <th>Descuento</th>
                                    <th>Description</th>
                                    
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Price</th>
                                    <th>Descuento</th>
                                    <th>Description</th>
                                </tr>
                            </tfoot>
                            <tbody>

                               { this.state.productos.map((producto, index) => {
                                   return <ProductList {...producto} key ={index} />

                                })
                                }
                              
                                
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
    
 
    </React.Fragment>
        )  
    }
}
export default Product;
