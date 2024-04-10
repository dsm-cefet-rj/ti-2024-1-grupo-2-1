import React from "react";
// import { Link } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import "./style.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAnimalToFav, removeAnimalToFav } from "../../redux/favanimal/actions";
import { useState } from "react";

const PetCards = ({ animais }) => {

  const id = animais.id;
  
  const[fav,setFav]=useState(animais.isfav);
  const navigate = useNavigate();

  const dispatch = useDispatch()
  // console.log({ animalFav });

  const handleAnimalFav = ( ) => {
    dispatch(addAnimalToFav(animais))
    animais.isfav=true;
    setFav(animais.isfav)
     

  }
  
  const handleRemove = () =>{
    dispatch(removeAnimalToFav(animais.id))
    animais.isfav=false;
    setFav(animais.isFav)
  }
 
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/detalhamento/${id}`);
    {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Card className="card-animal" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={animais.img} />
      <Card.Body>
        <Card.Title>{animais.nome}
        {fav ? (
                    <IoMdHeart className="complete" onClick={handleRemove}/>
            ):( <IoIosHeartEmpty className="incomplete" onClick={handleAnimalFav}/>
                 )}
        </Card.Title>
        <Card.Text>
          {animais && <p> Idade: {animais.idade}</p>}
          {animais && <p> Porte: {animais.porte}</p>}
        </Card.Text>
        {/* <Button variant="primary" onClick={handleSubmit} >Detalhes</Button> */}
        
          <button className="info" onClick={handleClick}>
            Detalhes
          </button>
        
      </Card.Body>
    </Card>
  );
};

export default PetCards;
