import React from "react";
import { Link } from "react-router-dom";
/*import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";*/
import './style.css'
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


const PetCards = ({ animais, showLink = true }) => {

    const id = animais.id;
    const navigate = useNavigate();
    // <div className="pet-card">
    //     <img className="img_pet" src={animais.img}></img>

    //     <h2>{animais.nome}</h2>

    //       {animais && <p> Idade: {animais.idade}</p>}
    //       {animais && <p> Porte: {animais.porte}</p>}


    //     {showLink && <Link className="info" to = {`/detalhamento/${id}`}>Detalhes</Link>}
    // </div>
    const handleClick = (e) => {
        e.preventDefault()
        navigate(`/detalhamento/${id}`);
        {window.scrollTo({ top: 0, behavior: 'smooth' })}
        
    }

    return (
        <Card className="card-animal"style={{ width: '18rem' }}>
            <Card.Img variant="top" src={animais.img} />
            <Card.Body>
                <Card.Title>{animais.nome}</Card.Title>
                <Card.Text>
                    {animais && <p> Idade: {animais.idade}</p>}       
                    {animais && <p> Porte: {animais.porte}</p>}
                </Card.Text>
                {/* <Button variant="primary" onClick={handleSubmit} >Detalhes</Button> */}
                {showLink && <button className="info" onClick={handleClick} >Detalhes</button>}
            </Card.Body>
        </Card>
        
    )
}

export default PetCards

