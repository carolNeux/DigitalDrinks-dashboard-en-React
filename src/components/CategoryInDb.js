import React from 'react';
import Category from './Category';

let categorias = [
    {categoria: 'Products'},
    {categoria: 'Courses'},
    {categoria: 'Recipess'},
]

function CategoryInDb(){
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    categorias.map((categoria,index)=>{
                                        return  <Category  {...categoria}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}
export default CategoryInDb;