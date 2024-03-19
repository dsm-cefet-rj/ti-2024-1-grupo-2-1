import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Main } from "../pages/Principal";



export const AppRouter = () => {
    return( 
        <Router>
            <Fragment>
                <Routes>
                    <Route  path="/main"  element={<Main/>}/>
                </Routes>
            </Fragment>    
        </Router>
    );
};