import React, { useEffect, useState } from 'react';
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import {
    updateAnimals,
    fetchAnimais,
    fetchOneAnimal,
} from "../../redux/Animais/slice";
import { animalSchema } from "../../validations/cadastroAnimalValidation";
import { useSelector, useDispatch } from "react-redux";
import TitlePage from '../../components/Title-Page';
import { InputUsuario } from '../../components/InputUsuario';
import RadioInput from '../../components/RadioInput';

const UpdateAnimais = () => {
  const {id} = useParams();
  // const {currentUser} = useSelector((rootReducer)=>rootReducer.userReducer);
  const {currentAnimal} = useSelector((rootReducer)=>rootReducer.animalReducer);
  
  const dispatch =useDispatch();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [history, setHistory] = useState("");
  const [img, setImg] = useState("");

  useEffect(()=>{
    dispatch(fetchOneAnimal(id));
  },[])
  useEffect(()=>{
    setName(currentAnimal.nome);
    setType(currentAnimal.tipo);
    setSize(currentAnimal.porte);
    setSex(currentAnimal.sexo);
    setAge(currentAnimal.idade);
    setHistory(currentAnimal.história);
    image(currentAnimal.img);
    console.log(type)
  },[currentAnimal])
  
  async function image(dataUrl) {
    const inputFile = document.querySelector("#ft_input");
    const pictureImage = document.querySelector(".ft_image");
    

  if (!dataUrl) {
    return;
  }

  // Limpeza da imagem anterior e do erro
  pictureImage.innerHTML = "";
  // errorImage.style.display = "none";

  // Criação e exibição da imagem
  const img = document.createElement("img");
  img.src = dataUrl;  // Define o src como a URL de dados
  img.classList.add("ft_img");
  pictureImage.appendChild(img);
  setImg(img.src);
  inputFile.addEventListener("change", image);
  }

  async function handleImageChange(event) {
    const inputFile = document.querySelector("#ft_input");
    const pictureImage = document.querySelector(".ft_image");
    const pictureImgTxt = "Escolha uma imagem";
    console.log(event.target.files)

    if (!inputFile || !pictureImage) {
      throw new Error(
        "DOM elements not found. Ensure #ft_input and .ft_image exist."
      );
    }

    const file = event.target.files[0];
    console.log(file);

    if (file) {
      const reader = new FileReader();

      try {
        const imageData = await new Promise((resolve, reject) => {
          reader.addEventListener("load", () => resolve(reader.result));
          reader.addEventListener("error", reject);
          reader.readAsDataURL(file);
          
        });

        pictureImage.innerHTML = ""; //limpa a imagem usada anteriormente
        const image = document.createElement("img");
        console.log(image)
        console.log(imageData)
        image.src = imageData;
        image.classList.add("ft_img");
        pictureImage.appendChild(image);
        setImg(imageData);
      } catch (error) {
        console.error("Error loading image:", error);
        pictureImage.innerHTML = pictureImgTxt; // mostra um erro caso ocorra
      }
    } else {
      pictureImage.innerHTML = pictureImgTxt;
    }
    inputFile.addEventListener("change", handleImageChange);
  }
  const handleUpdate =(e)=>{
    e.preventDefault();
    dispatch(updateAnimals({
      id:id,
      isFav:currentAnimal.isFav,
      img:img,
      nome:name,
      tipo:type,
      porte:size,
      sexo:sex,
      idade:age,
      história:history,
    }))
  }

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
  return (
    <div>
      <HeaderMain />
      <div className="div-container">
        <TitlePage text="Atualização das informações do animal"/>
        <div className="div-form">
          <form onSubmit={handleUpdate}>
            <h4 className="label-radio">Imagem do animal</h4>
            <label className="ft" for="ft_input" tabIndex={0}>
              <span className="ft_image">Escolha uma imagem</span>
            </label>
            <input
              src={currentAnimal.img}
              className="ft_input"
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
            <button className="cadastro-animal-bt" type="submit">
              Atualizar Animal
            </button>
          </form>
        </div>
      </div>
      <Footer />
      
    </div>
  )
}

export default UpdateAnimais
