import React from 'react';
import imagen from '../assets/images/DDlogoblanco.svg';
import {Link, Route, Switch} from 'react-router-dom';

// Importar todos los componentes externos que deseamos mostrar----
import Content from './Content';
import Nosotros from './Nosotros';
import Product from './Product';
//-----------
function SideBar(){
    return(
        <React.Fragment>
        {/*<!-- Sidebar -->*/}
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/*<!-- Sidebar - Brand -->*/}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="">
					<i className=""></i>
					<img className="sidebar-brand-icon d-flex align-items-center justify-content-center" src={imagen} width="60" alt='Digital Drinks Logo'/>
				</div>
				<div className="sidebar-brand-text mx-3"></div>
			</a>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider my-0"/>

			{/*<!-- Nav Item - Dashboard -->*/}
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard Digital Drinks</span></a>
			</li>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider"/>

			{/*<!-- Nav Item - Pages -->*/}
			<li className="nav-item">
				<Link className="nav-link collapsed" to="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Inicio</span>
				</Link>
			</li>

			{/*<!-- Nav Item - Charts -->*/}
			<li className="nav-item">
				<Link className="nav-link" to="/nosotros">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Nosotros</span>
				</Link>
			</li>

			{/*<!-- Nav Item - Tables -->*/}
			<li className="nav-item">
				<Link className="nav-link" to="/Product">
					<i className="fas fa-fw fa-table"></i>
					<span>Productos</span>
				</Link>
			</li>

			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
		{/*<!-- End of Sidebar -->*/}
		{/*<!-- Aqui debo armar mis rutas -->*/}
		<Switch>
			<Route exact path='/' component={Content}/>
			<Route exact path='/Nosotros' component={Nosotros}/>
			<Route exact path='/Product' component={Product}/>
		</Switch>

        </React.Fragment>
    )
}
export default SideBar;