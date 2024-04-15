import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";
import "./style.css";

const CadastroAnimal = () => {
  const [animal, setAnimal] = useState({});

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const [history, setHistory] = useState("");

  // Utilizando o useEfect para verificar a captura de dados está ocorrendo

  useEffect(() => {
    console.log(`${animal.id}`);
    console.log(`${animal.isFav}`);
    console.log(`${animal.img}`);
    console.log(`${animal.nome}`);
    console.log(`${animal.tipo}`);
    console.log(`${animal.porte}`);
    console.log(`${animal.sexo}`);
    console.log(`${animal.idade}`);
    console.log(`${animal.história}`);
  }, [animal]);

  const inputFile=document.querySelector('#ft_input');
const pictureImage = document.querySelector('.ft_image');
const pictureImgTxt = 'Escolha uma imagem';
pictureImage.innerHTML = pictureImgTxt

inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];
    if(file){
        const reader = new FileReader();

        reader.addEventListener('load',function(e){
            const thisReader = e.target;
            
            const img = document.createElement('img');
            img.src = thisReader.result;
            img.classList.add('ft_img');

            pictureImage.innerHTML = ""
            
            pictureImage.appendChild(img);
        })

        reader.readAsDataURL(file)
    }else{  
        pictureImage.innerHTML = pictureImgTxt


    }
})
  /*
    useEffect(() => {
        console.log(`${name}`);
        console.log(`${type}`);
        console.log(`${size}`);
        console.log(`${sex}`);
        console.log(`${age}`);
        console.log(`${history}`);
        console.log(`${image}`);
    }, [name, type, size, sex, age, history, image]);
    */

  const handleImageChange = (e) => {
    // estamos setando uma imagem padrão
    setImage(
      "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc"
    );
  };

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
                data-placeholder="Nome do animal"
              ></span>
            </div>
            <button className="cadastro-animal-bt">
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
