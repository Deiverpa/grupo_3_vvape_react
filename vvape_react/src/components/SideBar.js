import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsInDb from './ProductsInDb'
import LastProductInDb from './LastProductInDb'
import ContentWrapper from './ContentWrapper'
import ContentRowProducts from './ContentRowProducts'
import Error from './Error'
import 'bootstrap/dist/css/bootstrap.min.css';


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            {/*<!-- End of Sidebar -->*/}
            <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/ProductsInDb">
                    <ProductsInDb/>
                </Route>
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/ContentRowProducts">
                    <ContentRowProducts />
                </Route>
                <Route component={Error} />
            </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}
export default SideBar;