import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowProducts from './ContentRowProducts';
import ContentRowProducts2 from './ContentRowProducts2';
import Chart from './Chart';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-center mb-4">
						<h1 className="h3 mb-0 text-gray-800">VVAPE ADMIN DASHBOARD</h1>
					</div>
				
					{/*<!-- Content Row Products-->*/}
					<ContentRowProducts />
					<ContentRowProducts2 />
					<ContentRowCenter />
					<Chart />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;