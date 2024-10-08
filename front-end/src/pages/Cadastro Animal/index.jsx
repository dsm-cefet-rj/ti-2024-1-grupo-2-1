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
import SuccessMessage from "../../components/SuccessMessage";
import SelectInput from "../../components/Select-input";
import ErroMessage from "../../components/Error";
import InputUsuario from "../../components/InputUsuario";

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
  const [errors, setErrors] = useState({});
  const [erro, setErro] = useState("");
  const[sucesso, setSucesso] = useState("")


  const ERROR = (erro) =>{
    let erroN;
    let erroF;
    let erroT; 
    let erroSi;
    let erroSex;
    let erroA;
    let erroH;
    erro.map((err)=>{
      if(err.toLowerCase().includes("imagem")){
        erroF = err;
      }else if(err.toLowerCase().includes("nome")){
        erroN = err;
      } else if(err.toLowerCase().includes("tipo")){
        erroT = err;
      }else if(err.toLowerCase().includes("tamanho")){
        erroSi = err;
      } else if(err.toLowerCase().includes("sexo")){
        erroSex = err;
      }else if(err.toLowerCase().includes("idade")){
        erroA = err;
      } else if(err.toLowerCase().includes("historia")){
        erroH = err;
      }
    })
    return {
      img: erroF,
      name: erroN,
      type: erroT,
      size: erroSi,
      sex: erroSex,
      age: erroA,
      history:erroH,
    }

  }

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
        const img = document.createElement("img");
        img.src = imageData;
        img.classList.add("ft_img");
        pictureImage.appendChild(img);
  
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
try{
    await animalSchema.validate({
      img,
      name,
      type,
      size,
      sex,
      age,
      history,
    }, { abortEarly: false});
    setErrors({});
    
   dispatch(
      addAnimalServer({
        // isfav: false,
        // img: img,
        file:img,
        nome: name,
        tipo: type,
        porte: size,
        sexo: sex,
        idade: age,
        historia: history
      }) 
    ).then((response)=>{
      console.log(response)
      if (response.error){
        setErro("Token está inválido")
        setTimeout(()=>{
          setErro("")
        },1000)
        return
      }else{
        setSucesso("Animal cadastrado com sucesso!");
        setTimeout(()=>{
          setSucesso("")
           navigate("/");
          //window.location.reload();
        },3000)
      }
    })
  }catch(err){
    console.error("Erro durante o cadastro:", err.errors)
    setErrors(ERROR(err.errors));
  }
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

  // Usage:

  return (
    <div>
      <HeaderMain />
      <div className="div-container">
        <TitlePage text="Cadastro de animais"/>
        <div className="div-form">
          <form  className="form-SignUp"onSubmit={cadastrarAnimal}>
            <div className="div-form-SignUp_inputs">
            <div className="form-SignUp_input">
              <h4 className="label-radio">Imagem do animal</h4>
              <label className="ft" for="ft_input" tabIndex={0}>
                <span className="ft_image">Escolha uma imagem</span>
              </label>
              <input
                className="ft_input"
                id="ft_input"
                name="file"
                type="file"
                accept="image/"
                onChange={handleImageChange}
              />
              <label className="erro">{errors.img}</label>
                <InputUsuario
                    valor = {name}
                    type={"text"}
                    value={name}
                    onChange={(e)=>[setName(e.target.value)]}
                    label={"Nome do animal"}
                    error={errors.name}
                  />
            </div>
            <div className="form-SignUp_input">
                <h4 className="label-radio">Tipo do animal</h4>
                <div style={{display:"flex"}}>
                <RadioInput
                  name="animal-type"
                  items={items}
                  value={type}
                  onChange={(e)=>[setType(e.target.value)]}
                />
                <label className="erro">{errors.type}</label>
                </div>
                
                <h4 className="label-radio">Porte do animal</h4>
                <div style={{display:"flex"}}>
                <RadioInput
                  name="animal-size"
                  items={items2}
                  value={size}
                  onChange={(e)=>[setSize(e.target.value)]}
                />
                <label className="erro">{errors.size}</label>
                </div>

                <h4 className="label-radio">Sexo do animal</h4>

                <div style={{display:"flex"}}>
                <RadioInput
                  name="animal-sex"
                  items={items3}
                  value={sex}
                  onChange={(e)=>[setSex(e.target.value)]}
                />
                <label className="erro">{errors.sex}</label>
                </div>
                    <h4 className="label-radio">Idade do animal</h4>
                <div style={{display:"flex", flexDirection: "column"}}>
                    <SelectInput
                    name="animal-age"
                    items={items4}
                    onChange={(e)=>[setAge(e.target.value)]}
                    />
                  <label className="erro">{errors.age}</label>
                </div>
                    <InputUsuario
                      valor = {history}
                      type={"text"}
                      value={history}
                      onChange={(e)=>[setHistory(e.target.value)]}
                      label={"História do animal"}
                      error={errors.history}
                      history={true}
                    />
             </div>
            </div> 
          <div className="form-SignUpAnimal-Botao"> 
            <button className="cadastro-animal-botao" type="submit">
              Cadastrar animal
            </button>
          <ErroMessage text={erro}/>
          <SuccessMessage text={sucesso} />
          </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CadastroAnimal;
