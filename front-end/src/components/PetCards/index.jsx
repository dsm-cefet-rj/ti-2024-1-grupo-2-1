import React from "react";
import { Link } from "react-router-dom";  
/*import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";*/
import './style.css'
//import Card from 'react-bootstrap/Card';


const PetCards = ({animais, showLink=true})=>{

    const id=animais.id;
    

    
    return(
        <div className="pet-card">
            <img className="img_pet" src={animais.img}></img>

            <h2>{animais.nome}</h2>
            
              {animais && <p> Idade: {animais.idade}</p>}
              {animais && <p> Porte: {animais.porte}</p>}
              
              
            {showLink && <Link className="info" to = {`/detalhamento/${id}`}>Detalhes</Link>}
        </div>
    )
}

export default PetCards

