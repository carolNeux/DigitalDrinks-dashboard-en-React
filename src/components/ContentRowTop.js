import React,{Component} from 'react';
import SmallCard from './SmallCard';

class ContentRowTop extends Component {
   constructor(){
       // aca recibe los datos que vienen de otro lugar
       super();
       this.state ={
           productos:[]
       }
   }
   componentDidMount(){
      fetch('/api/products')
      .then(respuesta=>{
          return respuesta.json()
      })
      .then(productos=>{
        let totalAmount = 0;
        productos.data.products.map((producto) => {
            totalAmount += producto.price
         })
        this.setState({quantity:productos.metadata.quantity, totalAmount})
      })
      .catch (error=>console.log(error));
      fetch('/api/users')
      .then(respuesta=>{
        return respuesta.json()
    })
    .then(usuarios=>{
        this.setState({quantityUsers:usuarios.metadata.quantity})
    })
    .catch(error=>console.log(error));
  }
  render(){
    let CantProductos ={
        color:  "danger",
        titulo: "Cantidad de Productos",
        valor: this.state.quantity,
        icono: "fa-clipboard-list",
        moneda: false 
        }
        let amount ={
            color:   "success",
            titulo: "Capital en mercaderia",
            valor: this.state.totalAmount,
            icono: "fa-dollar-sign",
            moneda: true
        }
        let user = {
            color:   "warning",
            titulo: "Cantidad de usuarios",
            valor: this.state.quantityUsers,
            icono: "fa-user-check",
            moneda: false
        }
      return(
     <React.Fragment>
         <div className="row">
         <SmallCard {...CantProductos} />
         <SmallCard {...amount} />
         <SmallCard {...user} />     
        </div>

     </React.Fragment>
     )
  }
}
   export default ContentRowTop;
