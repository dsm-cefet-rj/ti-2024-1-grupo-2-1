import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";
import "./style.css";
import { useDispatch } from "react-redux";
import { addAnimalServer } from "../../redux/Animais/slice";
import { useNavigate } from "react-router-dom";

const CadastroAnimal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [history, setHistory] = useState("");
  const [img, setImg] = useState("");

  // Utilizando o useEfect para verificar a captura de dados está ocorrendo
  async function handleImageChange(event) {
    const inputFile = document.querySelector('#ft_input');
    const pictureImage = document.querySelector('.ft_image');
    const pictureImgTxt = 'Escolha uma imagem';
  
    if (!inputFile || !pictureImage) {
      throw new Error('DOM elements not found. Ensure #ft_input and .ft_image exist.');
    }
  
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      try {
        const imageData = await new Promise((resolve, reject) => {
          reader.addEventListener('load', () => resolve(reader.result));
          reader.addEventListener('error', reject);
          reader.readAsDataURL(file);
        });
  
        pictureImage.innerHTML = ''; //limpa a imagem usada anteriormente
        const img = document.createElement('img');
        img.src = imageData;
        img.classList.add('ft_img');
        pictureImage.appendChild(img);
        setImg(img.src);
      } catch (error) {
        console.error('Error loading image:', error);
        pictureImage.innerHTML = pictureImgTxt; // mostra um erro caso ocorra
      }
    } else {
      pictureImage.innerHTML = pictureImgTxt;
    }
    inputFile.addEventListener('change', handleImageChange);
  }
  
  const cadastrarAnimal = (e) => {
    e.preventDefault();

    if(!name | !type | !size | !sex | !age | history ){
      alert("Preencha todos os campos!");
      return;
    }

    dispatch(addAnimalServer({
      isfav: false,
      img: img,
      nome: name,
      tipo: type,
      porte: size,
      sexo: sex,
      idade: age,
      história: history 
    }))

    alert("Animal cadastrado com sucesso!");
    navigate("/");
    window.location.reload();
  };

  // Usage:

  return (
    <div>
      <HeaderMain />
      <div className="div-container">
        <div className="title-cadastro-animal-container">
          <h1>Cadastro do animal</h1>
          <span className="sublinha-cadastro_animal"></span>
        </div>
        <div className="div-form">
          <form>
          <h4 className="label-radio">Imagem do animal</h4>
          <label className="ft" for="ft_input" tabIndex={0}>
            <span className="ft_image">Escolha uma imagem</span>
          </label>
            <input className="ft_input"
                id="ft_input"
              type="file"
              accept="image/"
              onChange={handleImageChange}
            />
            <div className="wraper-input-c">
              <input
                className={name !== "" ? "has-val input" : "input-c"}
                type="name"
                value={name}
                onChange={(e) => [setName(e.target.value)]}
              />
              <span
                className="focused-input-c"
                data-placeholder="Nome do animal"
              ></span>
            </div>

            <h4 className="label-radio">Tipo do animal</h4>
            <input
              type="radio"
              id="dog"
              name="animal-type"
              value="Cachorro"
              onChange={(e) => [setType(e.target.value)]}
            />
            <label for="dog">Cachorro</label>
            <input
              type="radio"
              id="cat"
              name="animal-type"
              value="Gato"
              onChange={(e) => [setType(e.target.value)]}
            />
            <label for="cat">Gato</label>

            <h4 className="label-radio">Porte do animal</h4>
            <input
              type="radio"
              id="small"
              name="animal-size"
              value="Pequeno"
              onChange={(e) => [setSize(e.target.value)]}
            />
            <label for="small">Pequeno</label>
            <input
              type="radio"
              id="medium"
              name="animal-size"
              value="Médio"
              onChange={(e) => [setSize(e.target.value)]}
            />
            <label for="medium">Médio</label>
            <input
              type="radio"
              id="big"
              name="animal-size"
              value="Grande"
              onChange={(e) => [setSize(e.target.value)]}
            />
            <label for="big">Grande</label>

            <h4 className="label-radio">Sexo do animal</h4>
            <input
              type="radio"
              id="male"
              name="animal-sex"
              value="Macho"
              onChange={(e) => [setSex(e.target.value)]}
            />
            <label for="male">Macho</label>
            <input
              type="radio"
              id="female"
              name="animal-sex"
              value="Fêmea"
              onChange={(e) => [setSex(e.target.value)]}
            />
            <label for="female">Fêmea</label>

            <div className="wraper-input-c">
              <input
                className={age !== "" ? "has-val input" : "input-c"}
                type="text"
                value={age}
                onChange={(e) => [setAge(e.target.value)]}
              />
              <span
                className="focused-input-c"
                data-placeholder="Idade do animal"
              ></span>
            </div>

            <div className="wraper-input-c">
              <input
                className={history !== "" ? "has-val input" : "input-c"}
                type="text"
                value={history}
                onChange={(e) => [setHistory(e.target.value)]}
              />
              <span
                className="focused-input-c"
                data-placeholder="História do animal"
              ></span>
            </div>
            <button className="cadastro-animal-bt" onClick={cadastrarAnimal}>
              Cadastrar animal
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CadastroAnimal;
