import { useState } from "react";
import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addAnimalServer } from "../../redux/Animais/slice";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { animalSchema } from "../../validations/cadastroAnimalValidation";
import TitlePage from "../../components/Title-Page";
import RadioInput from "../../components/RadioInput";
/**
 * @module Page/CadastroAnimal
 * 
 */
/**
 * @typedef CadastroAnimal
 * @type {React.FC}
 */
/**
 * Renderiza uma pagina de cadastro de animal.
 * @returns {React.FC} - Componente React
 */

const CadastroAnimal = () => {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  let usuario = currentUser;
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
  /**
   * @function handleImageChange -Função que realizará a alteração da imagem do animal
   * @param {*} event -Evento
   * 
   */
  async function handleImageChange(event) {
    const inputFile = document.querySelector("#ft_input");
    const pictureImage = document.querySelector(".ft_image");
    const pictureImgTxt = "Escolha uma imagem";

    if (!inputFile || !pictureImage) {
      throw new Error(
        "DOM elements not found. Ensure #ft_input and .ft_image exist."
      );
    }

    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      try {
        const imageData = await new Promise((resolve, reject) => {
          reader.addEventListener("load", () => resolve(reader.result));
          reader.addEventListener("error", reject);
          reader.readAsDataURL(file);
        });

        pictureImage.innerHTML = ""; //limpa a imagem usada anteriormente
        const img = document.createElement("img");
        img.src = imageData;
        img.classList.add("ft_img");
        pictureImage.appendChild(img);
        setImg(img.src);
      } catch (error) {
        console.error("Error loading image:", error);
        pictureImage.innerHTML = pictureImgTxt; // mostra um erro caso ocorra
      }
    } else {
      pictureImage.innerHTML = pictureImgTxt;
    }
    inputFile.addEventListener("change", handleImageChange);
  }

  /**
   * @function cadastrarAnimal -Função que realizará o cadastro do animal
   * @param {*} e -Evento
   * 
   */
  const cadastrarAnimal = async (e) => {
    e.preventDefault();

    const isValid = await animalSchema.isValid({
      img,
      name,
      type,
      size,
      sex,
      age,
      history,
    });

    if (!isValid) {
      alert("Preencha todos os campos!");
      return;
    }

    dispatch(
      addAnimalServer({
        isfav: false,
        img: img,
        nome: name,
        tipo: type,
        porte: size,
        sexo: sex,
        idade: age,
        história: history,
      })
    );

    alert("Animal cadastrado com sucesso!");
    navigate("/");
    window.location.reload();
  };
  const items=[
    {value:"Cachorro", label: "Cachorro"},
    {value: "Gato", label: "Gato"}
  ];
  const items2=[
    {value:"Pequeno", label: "Pequeno"},
    {value: "Médio", label: "Médio"},
    {value:"Grande", label: "Grande"},
  ];
  const items3=[
    {value:"Macho", label: "Macho"},
    {value: "Fêmea", label: "Fêmea"}
  ];

  // Usage:

  return (
    <div>
      <HeaderMain />
      <div className="div-container">
        <TitlePage text="Cadastro de animais"/>
        <div className="div-form">
          <form  className="form-SignUp"onSubmit={cadastrarAnimal}>
            <h4 className="label-radio">Imagem do animal</h4>
            <label className="ft" for="ft_input" tabIndex={0}>
              <span className="ft_image">Escolha uma imagem</span>
            </label>
            <input
              className="ft_input"
              id="ft_input"
              type="file"
              accept="image/"
              onChange={handleImageChange}
            />
            <div className="wraper-input-cad">
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
            <div style={{display:"flex"}}>
            <RadioInput
              name="animal-type"
              items={items}
              value={type}
              onChange={(e)=>[setType(e.target.value)]}
            />

            </div>
            
            <h4 className="label-radio">Porte do animal</h4>
            <div style={{display:"flex"}}>
            <RadioInput
              name="animal-size"
              items={items2}
              value={size}
              onChange={(e)=>[setSize(e.target.value)]}
            />

            </div>

            <h4 className="label-radio">Sexo do animal</h4>

            <div style={{display:"flex"}}>
            <RadioInput
              name="animal-sex"
              items={items3}
              value={sex}
              onChange={(e)=>[setSex(e.target.value)]}
            />
            </div>

            <div className="wraper-input-cad">
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

            <div className="wraper-input-cad">
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
            <button className="cadastro-animal-botao" type="submit">
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
