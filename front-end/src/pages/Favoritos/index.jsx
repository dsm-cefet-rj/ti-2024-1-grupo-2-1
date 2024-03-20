import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Favoritos = () => {
  return (
    <div>
      <HeaderMain></HeaderMain>
      <div>
        <span className="h1">Seus Favoritos</span>
        <span className="line"></span>
      </div>
      <div>
        <form action="">
          <ul>
            <li>
              <select name="tipo-animal" id="tipo-animal">
                <option value="" disabled selected>
                  Tipo
                </option>
                <option value="cachorro">Cachorro</option>
                <option value="gato">Gato</option>
              </select>
            </li>
            <li>
              <select name="porte-animal" id="porte-animal">
                <option value="" disabled selected>
                  Porte
                </option>
                <option value="grande">Grande</option>
                <option value="medio">Médio</option>
                <option value="pequeno">Pequeno</option>
              </select>
            </li>
            <li>
              <select name="idade-animal" id="idade-animal">
                <option value="" disabled selected>
                  Idade
                </option>
                <option value="filhote">Filhote</option>
                <option value="adulto">Adulto</option>
                <option value="idoso">Idoso</option>
              </select>
            </li>
            <li>
              <select name="bairro-animal" id="bairro-animal">
                <option value="" disabled selected>
                  Bairro
                </option>
                <option value="maracana">Maracanã</option>
                <option value="tijuca">Tijuca</option>
                <option value="vila-isabel">Vila Isabel</option>
              </select>
            </li>
            <li>
              <select name="sexo-animal" id="sexo-animal">
                <option value="" disabled selected>
                  Sexo
                </option>
                <option value="Macho">Macho</option>
                <option value="Fêmea">Fêmea</option>
              </select>
            </li>
          </ul>
          <button type="submit">Buscar</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
