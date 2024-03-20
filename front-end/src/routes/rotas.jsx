import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Favoritos } from "../pages/Favoritos";
import { Detalhamento } from "../pages/Detalhamento";



export const AppRouter = () => {
    return( 
        <Router>
            <Fragment>
                <Routes>
                    <Route path="/favoritos" element={<Favoritos/>}/>
                    <Route path="/detalhamento" element={<Detalhamento/>}/>
                </Routes>
            </Fragment>    
        </Router>
    );
};
