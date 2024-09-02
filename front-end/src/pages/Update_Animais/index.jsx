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
// import InputUsuario from '../../components/InputUsuario';
import RadioInput from '../../components/RadioInput';
import SuccessMessage  from "../../components/SuccessMessage";
import SelectInput from '../../components/Select-input';
import InputUsuario from '../../components/InputUsuario';
// import { current } from '@reduxjs/toolkit';

/**
 * @module Page/Update_Animais
 * 
 */
/**
 * @typedef UpdateAnimais
 * @type {React.FC}
 */
/**
 * Renderiza uma pagina onde é feita a atualização das informações dos animais.
 * @returns {React.FC} - Componente
 */

const UpdateAnimais = () => {
  const {id} = useParams();
  // const {currentUser} = useSelector((rootReducer)=>rootReducer.userReducer);
  //const {currentAnimal} = useSelector((rootReducer)=>rootReducer.animalReducer);
   const { animals } = useSelector((rootReducer) => rootReducer.animalReducer);
  // const { status } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [history, setHistory] = useState("");
  const [img, setImg] = useState("");
  const [message, setMessage] = useState("");
  
  const animais =
   animals &&
   animals.filter((animal) => {
    if (id === animal.id) return animal;
  });

const currentAnimal = animais[0]

useEffect(()=>{
     dispatch(fetchAnimais());
    //  dispatch(fetchOneAnimal(id));
  //  window.location.reload();
},[]);
  useEffect(()=>{
    if(currentAnimal !== null){
      setName(currentAnimal.nome);
      setType(currentAnimal.tipo);
      setSize(currentAnimal.porte);
      setSex(currentAnimal.sexo);
      setAge(currentAnimal.idade);
      setHistory(currentAnimal.historia);
      setImg(currentAnimal.file);
      setTimeout(()=>{
        image();
      },50)

    }else{
      console.log("Carregando animal")
    }
  },[currentAnimal])
  
  async function image(e) {
    const inputFile = document.querySelector("#ft_input");
    const pictureImage = document.querySelector(".ft_image");
    

  if (!img) {
    return;
  }

  // Limpeza da imagem anterior e do erro
  pictureImage.innerHTML = "";
  // errorImage.style.display = "none";
  let path = currentAnimal.file.replace(/\\/g, "/").split('/')[4];
  // Criação e exibição da imagem
  const imagem = document.createElement("img");
  imagem.src = require(`../../images/${path}`);  // Define o src como a URL de dados
  imagem.classList.add("ft_img");
  pictureImage.appendChild(imagem);
  setImg(img.src);
  inputFile.addEventListener("change", image);
  }

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
    setImg(file);

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
        image.src = imageData;
        image.classList.add("ft_img");
        pictureImage.appendChild(image);
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
   * @function handleUpdate -Função responsavel por atualizar as informações dos animais
   * @param {*} e - Evento
   */
  const handleUpdate =(e)=>{
    e.preventDefault();
  try{  
    dispatch(updateAnimals({
      id:id,
      // isFav:currentAnimal.isFav,
      file:img,
      nome:name,
      tipo:type,
      porte:size,
      sexo:sex,
      idade:age,
      historia:history,
    }))
    setMessage("Animal atualizado com sucesso.");

    setTimeout(()=>{
      setMessage("");
      navigate("/");
     dispatch(fetchAnimais());
      // window.location.reload();
    },900)
  }catch(err){  
    console.log(err)

  }

    // setTimeout(() => {
    // navigate("/")
    // dispatch(fetchAnimais());
    // window.location.reload();
    // }, 100)
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
  const items4=[
    {value:"All",label:"Todos"},
    {value:"1 ano",label: "1 ano"},
    {value:"2 anos",label: "2 anos"},
    {value:"3 anos",label: "3 anos"},
    {value:"4 anos",label: "4 anos"},
    {value:"5 anos",label: "5 anos"},
    {value:"6 anos",label: "6 anos"},
    {value:"7 anos",label: "7 anos"},
    {value:"8 anos",label: "8 anos"},
    {value:"9 anos",label: "9 anos"},
    {value:"10 anos",label: "10 anos"},
    {value:"11 anos",label: "11 anos"}, 
    {value:"12 anos",label: "12 anos"}, 
    {value:"13 anos",label: "13 anos"},
    {value:"14 anos",label: "14 anos"}
    ];
  return (
    currentAnimal === null ? <div><h1>O animal é null</h1></div> : 
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
              <InputUsuario
                  valor = {name}
                  type={"text"}
                  value={name}
                  onChange={(e)=>[setName(e.target.value)]}
                  label={"Nome do animal"}
                />

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
            <h4 className="label-radio">Idade do animal</h4>
            <div style={{display:"flex"}}>
                <SelectInput
                name="animal-age"
                value={age}
                items={items4}
                onChange={(e)=>[setAge(e.target.value)]}
                />
              
            </div>
                <InputUsuario
                  valor = {history}
                  type={"text"}
                  value={history}
                  onChange={(e)=>[setHistory(e.target.value)]}
                  label={"História do animal"}
                />
  
            <button className="cadastro-animal-botao" type="submit">
              Atualizar Animal
            </button>
            <SuccessMessage text={message}/>
          </form>
        </div>
      </div>
      <Footer />
      
    </div>
  )
}

export default UpdateAnimais
