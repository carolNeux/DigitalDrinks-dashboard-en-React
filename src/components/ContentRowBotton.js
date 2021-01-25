import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoryInDb from './CategoryInDb';


function ContentRowBotton(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb />    
            <CategoryInDb />
        </div>
       
        </React.Fragment>
    )
}
export default ContentRowBotton;