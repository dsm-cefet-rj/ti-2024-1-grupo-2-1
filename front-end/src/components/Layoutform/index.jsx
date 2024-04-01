import './style.css';
import Logo from "../../assets/logo2.png"
export const Layout = (props) => {

    return (
        
            <div className="container-form"
                // style={{backgroundImage:{Logo}}}
            >
                
                    <img src={Logo} className="bg_logo" />
                    
                    <div className="wrap-form">
                        {props.children}
                    </div>

            </div>
    

    )
}