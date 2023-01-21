import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GenresInDb from './GenresInDb'
import LastMovieInDb from './LastMovieInDb'
import ContentWrapper from './ContentWrapper'
import ContentRowMovies from './ContentRowMovies'
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
                <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route component={Error} />
            </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}
export default SideBar;