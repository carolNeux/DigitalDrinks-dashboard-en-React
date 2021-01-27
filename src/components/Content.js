import React from 'react';

import NavBar from './NavBar'
//Aquí incorporé los Componentes MainContent y Footer
import MainContent from './MainContent';
import Footer from './Footer';

function Content(){
    return(
        <React.Fragment>
        {/*<!-- Content Wrapper -->*/}
		<div id="content-wrapper" className="d-flex flex-column">

			{/*<!-- Main Content -->*/}
			<div id="content">
                <NavBar />
                <MainContent />
                <Footer />
            </div>    
        </div>
        </React.Fragment>
        
    )
}
export default Content;