import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./styles.css";
import { Breadcrumb } from "react-bootstrap";
import PetCards from "../../components/PetCards";
import { Grade } from "../../components/GridContainer";
import { useSelector } from "react-redux";

export const Favoritos = () => {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  // const { animalsFav } = useSelector((rootReducer) => rootReducer.animalFavReducer)
  const { animals } = useSelector((rootReducer) => rootReducer.animalReducer);

  // const dispatch= useDispatch();
  // console.log({animals});
  // console.log({animalsFav});
  const favoritados =
    animals &&
    animals.filter((animal) => {
      if (animal.isfav === true) {
        return animal;
      }
    });

  return (
    <div className="all">
      <HeaderMain></HeaderMain>
      <div className="breadcrumb-favoritos">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Principal</Breadcrumb.Item>
          <Breadcrumb.Item active>Favoritos</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="title-favoritos-container">
        <span className="title-favoritos">Seus Favoritos</span>
        <span className="sublinha-favoritos"></span>
      </div>

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
      <Footer></Footer>
    </div>
  );
};
