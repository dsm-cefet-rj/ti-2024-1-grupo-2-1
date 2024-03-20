import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Favoritos } from "../pages/Favoritos";



export const AppRouter = () => {
    return( 
        <Router>
            <Fragment>
                <Routes>
                    <Route path="/favoritos" element={<Favoritos/>}/>
                </Routes>
            </Fragment>    
        </Router>
    );
};