import React, {useEffect, useRef, useState} from "react";
import { IoMdHeart, IoIosHeartEmpty } from "react-icons/io";
import "./style.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAnimalToFav, removeAnimalToFav } from "../../redux/favanimal/slice";
import { changeAnimalIsFav, deleteAnimal, fetchAnimais } from "../../redux/Animais/slice";
import { FaTrash } from "react-icons/fa";
import { addAnimalFavServer } from "../../redux/AnimaisFav/slice";
import Modal from "../Modal";
import { FaPenClip } from "react-icons/fa6";
import { addAnimalToUserFavoriteCollection, getUserEntryAtCollection, removeAnimalFromUserFavoriteCollection } from "../../redux/Favoritos/slice";
/**
 * @module Componente/Card_Pet
 */

/**
 * @typedef PetCards
 * @type {React.FC}
 * @property {number}id - Identificador do animal.
 * @property {string}nome - Nome do animal.
 * @property {URL}img - URL da foto do animal.
 * @property {string}idade - idade do animal.
 * @property {string}porte - porte do animal.
 *
 */
/**
 * Componente React para exibir informações de animal e permitir a exclusão ou atualização do animal(somente admin).
 * @param {object} pedido - O objeto que contem as informações
 * @returns {React.FC} - Retorna um componente React
 */

const PetCards = ({ animais }) => {
  const id = animais.id;
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { userFavAnimals } = useSelector((rootReducer) => rootReducer.userFavoriteAnimalsReducer);
  // const { animaisFav }  = useSelector((rootReducer) => rootReducer.animaisFavReducer)
  const [fav, setFav] = useState(false);
  const[visible,setVisible] =useState(false);
  const[visivel,setVisivel] =useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

   // Atualiza o estado `fav` com base na lista de favoritos do Redux
   
   /*
   useEffect(() => {
    animalsUserFav.map((ids) => {
      if(ids === id){
        setFav(true);
        }else{
          setFav(false);
      }
      })
      }, [])
      */
     
     const handleAnimalFav = () => {
       if (currentUser !== null) {
        dispatch(addAnimalToUserFavoriteCollection({ email: currentUser.email, animalId: id, operacao: "ADD"}));
        setFav(true);
      } else {
        alert("Você precisa estar logado para favoritar um animal");
      }
    };
    
    useEffect(() => {
      // Adiciona um ouvinte de evento de clique ao documento inteiro
      function handleClickOutside(event) {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          // Clique fora do botão de perfil, então ele é escondido
          setVisible(false);
        }
      }
      
      document.addEventListener("click", handleClickOutside);
      
      // Limpa o ouvinte de evento quando o componente de mostrar perfil é desmontado
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);
    
    
    const handleRemove = () => {
      dispatch(removeAnimalFromUserFavoriteCollection({ email: currentUser.email, animalId: id, operacao: "REMOVE"}));
      setFav(false);
      dispatch(getUserEntryAtCollection(currentUser.email));
    };
    
    useEffect(() => {
      // console.log(userFavAnimals)
      const arrayAux = userFavAnimals
      // console.log('Estado local: ', arrayAux);
      arrayAux.map((idsFavoritados) => {
        if(idsFavoritados === id && currentUser !== null){
          setFav(true);
        }
      })
    }, [handleAnimalFav,handleRemove]);
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
    dispatch(fetchAnimais())
    // window.location.reload();
  };
  const Update = () =>{
    navigate(`/update_animal/${id}`);
    {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
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
        <button className="info" onClick={handleClick}>
          Detalhes
        </button>
        {currentUser !== null &&
        currentUser.admin ===  true
        // && currentUser.nome === "Adm" && currentUser.email === "admin@admin" 
        ? 
        <button className="info"onClick={Update}>
          <FaPenClip /> Editar 
        </button>: <></>}
      </Card.Body>
      {/* && currentUser.nome === "Adm" && currentUser.email === "admin@admin" */}
      {currentUser !== null && currentUser.admin ===  true ? <button ref={modalRef}  className="botao-options" onClick={Delete} > <FaTrash className="animal_options"/> </button>: <></>}
    </Card>
      <Modal 
        visivel={visible}
        close={()=>{setVisible(false)}}
        onClick={Delete}
        text={"Deseja excluir esse animal?"}
        labelButton={`Excluir `}
        />
    </>
  );
};

export default PetCards;
