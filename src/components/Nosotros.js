import React from 'react';
import logo from '../assets/images/DDlogoGris.svg';
import Footer from './Footer';

function Nosotros(){
 return(
     <React.Fragment>
        <div className='container-fluid'>
            <h1 className='text-white bg-info text-center p-4' > Somos Digital Drinks</h1>
            
            <div className="card border-info bg-white text-dark b">
                <img className='w-100' src={logo}  alt="logo"/>
                 <div class="card-img-overlay text-center .fs-5 text w-40">
                 <br></br><br></br><br></br>
                  <h4 class="card-title text-center fw-bold">Un poquito de historia</h4>
                  <br></br>
                 <p class="text">Hace un año nos juntamos en Digital House para estudiar. </p>
                 <p class="text"> Desde entonces creamos este proyecto de comercializacion de bebidas alcoholicas e insumos para cocteleria.</p>
                <p class="card-text">Para brindarte un mejor servicio sumamos aglunas recetas y cursos.
                </p>
                <p class="card-text">
                Esperamos que disfuten de esta experiencia.</p><br></br>
                <p class="card-text">Ximena Camachi</p>
                <p class="card-text">Carlos Lofreda</p>
                <p class="card-text">Robert Rondon</p>
                <p class="card-text">Carolina Neumeyer</p>
            </div>
          </div>
          <Footer/>
        </div>
     </React.Fragment>
 )
}

export default Nosotros;