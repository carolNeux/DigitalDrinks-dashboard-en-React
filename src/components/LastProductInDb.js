import React, {Component} from 'react';

class LastProductInDb extends Component{

   constructor(){
      // aca recibe los datos que vienen de otro lugar
      super();
      this.state ={
          productos:[]
      }
  }
  componentDidMount(){
   fetch('/api/products')
   .then(response=>{ return response.json()})
   .then(productos=>{
      let ultimoProd = productos.data.products.length - 1;
     this.setState({producto:productos.data.products[ultimoProd].description})
     this.setState({image:'http://localhost:5000/images/products/' + productos.data.products[ultimoProd].image})   
     console.log(this.state.products)  
   })
   .catch (error=>console.log(error));
}
    render (){
        console.log(this.state)
        return(
             <React.Fragment>
                <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Ultimo Producto en la Base de datos</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:15+'rem'}} src={this.state.image} alt="ultimo producto"/>
                        </div>
                        <p>{this.state.producto}</p>
                       
                    </div>
                </div>
            </div>

      </React.Fragment>
    )
}
}
export default LastProductInDb;
