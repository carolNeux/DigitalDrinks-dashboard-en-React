import React from 'react';
// Aquí debemos importar los componentes ContentRowTop y ContentRowBotton y Product
import ContentRowTop from './ContentRowTop';
import ContentRowBotton from './ContentRowBotton';
import Product from './Product';

function MainContent(){
    return (
        <React.Fragment>
            {/*<!-- Begin Page Content -->*/}
            <div className="container-fluid">

                {/*<!-- Page Heading -->*/}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard de Digital Drinks</h1>
                </div>
                {/*Aquí debemos llamar a los componentes  ContentRowTop y a ContentRoBotton*/}
                <ContentRowTop />
                <ContentRowBotton />
                {/* <Product /> */}
            </div>       
        </React.Fragment>
    )
}
export default MainContent;