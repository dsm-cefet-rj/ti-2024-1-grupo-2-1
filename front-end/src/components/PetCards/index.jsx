import React from "react";
// import { Link } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import "./style.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useState } from "react";
import { useSelector} from "react-redux";
import { addAnimalToFav, removeAnimalToFav } from "../../redux/favanimal/slice";
import { changeAnimalIsFav } from "../../redux/Animais/slice";

const PetCards = ({ animais }) => {

  const id = animais.id;
  const{ currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const[fav,setFav]=useState(animais.isfav);
  const navigate = useNavigate();

  const dispatch = useDispatch()
  // const { animalsFav } = useSelector((rootReducer) => rootReducer.animalFavReducer)
  // const { animals } = useSelector((rootReducer) => rootReducer.animalReducer)
  
  
  

  const handleAnimalFav = ( ) => {
    if(currentUser !== null){
    // animais.isfav=true;
    dispatch(addAnimalToFav(animais));
    dispatch(changeAnimalIsFav(animais.id));
    //dispatch isFav to animals array here!!!!!
    setFav(!animais.isfav);
    // animals.isfav=true;
    // animalsFav.isfav=true;
    }
    else{
      alert("Você precisa estar logado para favoritar um animal");
    }
  }
  
  const handleRemove = () =>{
    // animais.isfav= false
    dispatch(removeAnimalToFav(animais.id));
    dispatch(changeAnimalIsFav(animais.id));
    // animalsFav.isfav=false;
    // animals.isfav=false;
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
        </Card.Title>{fav ? (<IoMdHeart className="completado" onClick={handleRemove}/>
            ):( <IoIosHeartEmpty className="incompleto" onClick={handleAnimalFav}/>
                 )}
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
