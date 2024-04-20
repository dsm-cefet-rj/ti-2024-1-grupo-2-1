import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./index.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import PetCards from "../../components/PetCards";
import { Grade } from "../../components/GridContainer"
import { useParams } from "react-router-dom";
import Paginacao from "../../components/Pagination";
import { useSelector } from "react-redux";


export const Detalhamento = () => {
  const{ currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { id } = useParams();
  const { animals } = useSelector((rootReducer) => rootReducer.animalReducer)
  const { error } = useSelector((rootReducer) => rootReducer.animalReducer)
  const { status } = useSelector((rootReducer) => rootReducer.animalReducer)
  const navigate = useNavigate();
  
  
  
  
  
  const handleClick = (e) => {
    if(currentUser != null){
      e.preventDefault();
      navigate(`/agendamento/${id}`);
      {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    else{
      alert("Você precisa estar logado para reailzar um agendamento!");
    }
  };
  
  // const nomeAnimal = "Nome do Animal";
  const localizacao = "Rio de Janeiro";
  const acessos = 205;
  const publicador = "Administrador";
  // const url = "https://via.placeholder.com/650x400";
  // const cardImg = "https://via.placeholder.com/480x480";
  const [animalsPerPage, setAnimalsPerPage] = useState(5);
  const [paginaAtual, setPaginaAtual] = useState(0);
  
  const pages = Math.ceil(animals.length / animalsPerPage, 1);
  const startIndex = paginaAtual * animalsPerPage;
  const endIndex = startIndex + animalsPerPage;
  const itensAtuais = animals.slice(startIndex, endIndex);
  
  // useEffect(() => {
  //   // Buscar dados dos animais do Redux ou de outra fonte
  //   const fetchData = async () => {
  //     const animais = animals;
  //     if(animais && animais.length>0){
  //       return animais
  //     }
  //   };
  //   fetchData();
  // }, []);

    // console.log(id);
    // console.log(animals);

  //  let animais = "";
  //   if(status==="loaded"){
  //     animais = animals && animals.filter((animal) => {
  //         if(animal.id === id){
  //           return animals
  //         }
  //         })
  //   }else if(status === "loading"){
  //     animais = <div>
        
  //         Carregando animais...
        
  
  //     </div>
  //   }else if(status === "failed"){
  //     animais= <div>
        
  //         error: {error}
        
  
  //     </div>
  //   }
  
    // const animais = animals && animals.filter((animal) => {
    //   if(animal.id === id){
    //     return true
    //   }
    // })
   const animais =
   animals &&
   animals
   .filter((animal) => {
    if(id === animal.id) return animal
   }); 
    
   const animalDetalhado = animais.slice(0, 1);
   console.log(animalDetalhado)


 
  let animaisTabelados = "";
  if(status === "loaded"){
    animaisTabelados = 
    <Grade>
    {itensAtuais.map((animal) => (
      
      <PetCards key={animal.id} animais={animal}  />
      
    ))}
  </Grade>
  }else if(status === "loading"){
    animaisTabelados = <div>
      
        Carregando animais...
      

    </div>
  }else if(status === "failed"){
    animaisTabelados = <div>
      
        error: {error}
      

    </div>
  }

  // animais.map((animal) => {
  //   if(animal.id === id){
  //     return animal;
  //   }
  // })


  return (
    <div>
      <HeaderMain />
      { animais &&
      <div className="div-main">
        <div className="div-topo">
          <div className="div-esquerda">
            <div className="navegacao">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Principal</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                  Detalhamento do Animal
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#"> {animais && animais[0] && animais[0].nome}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            
            <img
              src={animais && animais[0] && animais[0].img}
              alt="Imagem do Animal"
              id="imagem-animal"
            ></img>
          </div>
          <div className="div-direita">
            <div className="nome-animal">
              <h1 id="nome">{animais && animais[0] && animais[0].nome}</h1>
            </div>
            <div className="status-animal">
              <h2 id="localizacao">Localização do Animal: {localizacao}</h2>
              <h2 id="publicador">Publicador: {publicador}</h2>
              <h2 id="acessos">Acessos à página: {acessos}</h2>
            </div>
            <div className="historia-animal">
              <p>{animais && animais[0] && animais[0].história}</p>
            </div>
            <div className="botao-adotar">
              <input
                type="button"
                onClick={handleClick}
                value="QUERO ADOTAR"
                id="botao-quero-adotar"
              />
            </div>
          </div>
        </div>
        <div className="div-fundo">
          <div className="informacoes-animal">
            <h3>Informações do animal</h3>
            <span id="linha"></span>
            <p id="info-animal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ea
              reiciendis repellat ratione itaque totam necessitatibus tempora
              quisquam, exercitationem rerum, dolorem earum officia nihil
              dolores libero. Deleniti nihil ullam repellat dolores libero eaque
              quia sint unde corrupti magni totam dolor possimus, quo
              voluptatibus quas earum maxime tempore id mollitia animi
              voluptatum! Recusandae, nostrum eius. Placeat facere eveniet et,
              illum nihil pariatur eligendi dolor tempore aliquid aliquam
              ducimus similique accusamus culpa omnis. Quisquam ut corporis,
              laudantium officiis vero mollitia magnam quo?
            </p>
          </div>
          <div className="outros-animais">
            <h3>Outros animais parecidos...</h3>
            <span id="linha"></span>
          </div>
          {animaisTabelados}
        </div>
        {animals.length && (
          <Paginacao
            paginaAtual={paginaAtual}
            pages={pages}
            setPaginaAtual={setPaginaAtual}
          />
        )}
      </div>}
      <Footer />
    </div>
  );
};

export default Detalhamento;
