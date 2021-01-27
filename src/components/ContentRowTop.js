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
        titulo: "Products in Data Base",
        valor: this.state.quantity,
        icono: "fa-clipboard-list",
        moneda: false 
        }
        let amount ={
            color:   "success",
            titulo: "Amount in products",
            valor: this.state.totalAmount,
            icono: "fa-dollar-sign",
            moneda: true
        }
        let user = {
            color:   "warning",
            titulo: "Users quantity",
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
