import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import TitlePage from "../../components/Title-Page";
import "./styles.css";
import { Breadcrumb } from "react-bootstrap";
import PetCards from "../../components/PetCards";
import  Grade  from "../../components/GridContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFavAnimals } from "../../redux/AnimaisFav/slice";
import { getUserEntryAtCollection } from "../../redux/Favoritos/slice";

/**
 * @module Page/Favoritos
 * 
 */
/**
 * @typedef Favoritos
 * @type {React.FC}
 */
/**
 * Renderiza uma pagina de onde ficarão os animais favoritados pelo usuario.
 * @returns {React.FC} - Componente react
 */
 const Favoritos = () => {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  const { userFavAnimals } = useSelector((rootReducer) => rootReducer.userFavoriteAnimalsReducer)
  const { animals } = useSelector((rootReducer) => rootReducer.animalReducer);

   const dispatch= useDispatch();
  console.log(userFavAnimals);

  let favoritados = []

  animals.forEach((animal) => {
    userFavAnimals.map((ids) => {
      if(String(ids) === animal.id){
        favoritados.push(animal);
      }
    })
  })

  console.log(favoritados);

    useEffect(() =>{
      if(currentUser !== null){
        dispatch(getUserEntryAtCollection(currentUser.email));
      }
    },[])

  return (
    <div className="all">
      <HeaderMain/>
      <div className="breadcrumb-favoritos">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Principal</Breadcrumb.Item>
          <Breadcrumb.Item active>Favoritos</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <TitlePage text="Seus Favoritos"/>

      <div className="grade-container">
        {favoritados.length ? (
          <Grade>
            {favoritados.map((animal) => (
              <PetCards key={animal.id} animais={animal} />
            ))}
          </Grade>
        ) : currentUser != null ? (
          <div className=" espaço-preenchido">
            {" "}
            <p>Não animais favoritados por você ainda</p>
          </div>
        ) : (
          <div className=" espaço-preenchido">
            {" "}
            <p>Você precisa estar logado para favoritar animais!</p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};
export default Favoritos;