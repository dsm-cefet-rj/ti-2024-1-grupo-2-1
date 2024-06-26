import React from "react";
import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import "./style.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useState } from "react";
import { useSelector } from "react-redux";
import { addAnimalToFav, removeAnimalToFav } from "../../redux/favanimal/slice";
import { changeAnimalIsFav, deleteAnimal } from "../../redux/Animais/slice";
import { MdOutlineCancel } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { addAnimalFavServer } from "../../redux/AnimaisFav/slice";

const PetCards = ({ animais }) => {
  const id = animais.id;
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  // const { animaisFav }  = useSelector((rootReducer) => rootReducer.animaisFavReducer)
  const [fav, setFav] = useState(animais.isfav);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAnimalFav = () => {
    if (currentUser !== null) {
      // animais.isfav=true;
      dispatch(addAnimalToFav(animais));
      dispatch(changeAnimalIsFav(animais.id));
      dispatch(addAnimalFavServer({
        id_animal:id,
        id_user: currentUser.id,
      })
    );
      //dispatch isFav to animals array here!!!!!
      setFav(!animais.isfav);
      // animals.isfav=true;
      // animalsFav.isfav=true;
    } else {
      alert("Você precisa estar logado para favoritar um animal");
    }
  };
  
  const handleRemove = () => {
    dispatch(removeAnimalToFav(animais.id));
    dispatch(changeAnimalIsFav(animais.id));

    setFav(animais.isFav);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/detalhamento/${id}`);
    {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const Delete = (e) => {
    e.preventDefault();
    dispatch(deleteAnimal(id));
    window.location.reload();
  };
  const Update = (e) =>{
    e.preventDefault();
    navigate(`/update_animal/${id}`);
    {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <Card className="card-animal" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={animais.img} />
      <Card.Body>
        <Card.Title>{animais.nome}</Card.Title>
        {fav ? (
          <IoMdHeart className="completado" onClick={handleRemove} />
        ) : (
          <IoIosHeartEmpty className="incompleto" onClick={handleAnimalFav} />
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
      {currentUser !== null && currentUser.nome === "Adm" && currentUser.email === "admin@admin" ? <MdOutlineCancel className="animal_delete" onClick={Delete} /> : <></>}
      {currentUser !== null && currentUser.nome === "Adm" && currentUser.email === "admin@admin" ? <FaPencil className="animal_update" onClick={Update} /> : <></>}
    </Card>
  );
};

export default PetCards;
