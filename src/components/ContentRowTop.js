import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "danger",
    titulo: "Products in Data Base",
    valor: 550,
    icono: "fa-clipboard-list",
    moneda: false 
}

let amount ={
    color:   "success",
    titulo: "Amount in products",
    valor: 546,
    icono: "fa-dollar-sign",
    moneda: true
}

let user = {
    color:   "warning",
    titulo: "Users quantity",
    valor: 38,
    icono: "fa-user-check",
    moneda: false
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;