import './style.css';
import Logo from "../../assets/logo2.png"
export const Layout = (props) => {

    return (
        <div className="contaner">
            <div className="contaner-form">
                    
                    <div className="wrap-form">
                        {props.children}
                    </div>

            </div>
    
        </div>
    )
}