import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./styles.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Favoritos = () => {
  return (
    <div>
      <HeaderMain></HeaderMain>
      <div className="title-favoritos-container">
        <span className="title-favoritos">Seus Favoritos</span>
        <span className="sublinha-favoritos"></span>
      </div>
        <form className="form-filtro-favoritos" action="">
            <div>
              <select name="tipo-animal" id="tipo-animal">
                <option value="" disabled selected>
                  Tipo
                </option>
                <option value="cachorro">Cachorro</option>
                <option value="gato">Gato</option>
              </select>
            </div>
            <div>
              <select name="porte-animal" id="porte-animal">
                <option value="" disabled selected>
                  Porte
                </option>
                <option value="grande">Grande</option>
                <option value="medio">Médio</option>
                <option value="pequeno">Pequeno</option>
              </select>
            </div>
            <div>
              <select name="idade-animal" id="idade-animal">
                <option value="" disabled selected>
                  Idade
                </option>
                <option value="filhote">Filhote</option>
                <option value="adulto">Adulto</option>
                <option value="idoso">Idoso</option>
              </select>
            </div>
            <div>
              <select name="bairro-animal" id="bairro-animal">
                <option value="" disabled selected>
                  Bairro
                </option>
                <option value="maracana">Maracanã</option>
                <option value="tijuca">Tijuca</option>
                <option value="vila-isabel">Vila Isabel</option>
              </select>
            </div>
            <div>
              <select name="sexo-animal" id="sexo-animal">
                <option value="" disabled selected>
                  Sexo
                </option>
                <option value="Macho">Macho</option>
                <option value="Fêmea">Fêmea</option>
              </select>
            </div>
        </form>
      <Footer></Footer>
    </div>
  );
};
