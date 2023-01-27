import React from 'react';
import LastProductInDb from './LastProductInDb';
import ProductsInDb from './ProductsInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last Product in Data Base -->*/}

            {/*<!-- Products in DB -->*/}
            <ProductsInDb />

        </div>
    )
}

export default ContentRowCenter;