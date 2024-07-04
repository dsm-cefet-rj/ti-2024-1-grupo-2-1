import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { useParams } from "react-router-dom";
import { getOneRegister, updateRequest, orderNull } from "../../redux/pedidoAdocao/slice";
import { useEffect } from "react";
import HeaderMain from "../../components/HeaderMain/index";
import Footer from "../../components/Footer/index";
import { fetchOneAnimal } from "../../redux/Animais/slice";
import { FiCheck, FiX } from "react-icons/fi";
import logo from "../../assets/logopreta2.png";
export const VerificarPedido = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentOrder } = useSelector(
    (rootReducer) => rootReducer.pedidoAdocaoReducer
  );
  const { currentAnimal } = useSelector(
    (rootReducer) => rootReducer.animalReducer
  );
  const { status } = useSelector((rootReducer) => rootReducer.userReducer);

  console.log(currentOrder );

  useEffect(() => {
    dispatch(getOneRegister(id));
    if(status === "loaded"){
      dispatch(fetchOneAnimal(currentOrder.idAnimal));
    }
  }, []);
  
  const handleVerify = (e) =>{
    e.preventDefault();
     
    dispatch(updateRequest({
      id : currentOrder.id,
     idAnimal : currentOrder.idAnimal,
     nomeAnimal : currentOrder.nomeAnimal,
     nomeAdotante : currentOrder.nomeAdotante,
     cpfAdotante : currentOrder.cpfAdotante,
     rgAdotante : currentOrder.rgAdotante,
     emailAdotante : currentOrder.emailAdotante,
     idadeAdotante : currentOrder.idadeAdotante,
     celAdotante : currentOrder.celAdotante,
     pergunta1 : currentOrder.pergunta1,
     pergunta2 : currentOrder.pergunta2,
     pergunta3 : currentOrder.pergunta3,
     pergunta4 : currentOrder.pergunta4,
     pergunta5 : currentOrder.pergunta5,
      status:"approved"
    }));
    orderNull();
  }
  const handleDenied = (e) =>{
    e.preventDefault();
    
    dispatch(updateRequest({
      id : currentOrder.id,
     idAnimal : currentOrder.idAnimal,
     nomeAnimal : currentOrder.nomeAnimal,
     nomeAdotante : currentOrder.nomeAdotante,
     cpfAdotante : currentOrder.cpfAdotante,
     rgAdotante : currentOrder.rgAdotante,
     emailAdotante : currentOrder.emailAdotante,
     idadeAdotante : currentOrder.idadeAdotante,
     celAdotante : currentOrder.celAdotante,
     pergunta1 : currentOrder.pergunta1,
     pergunta2 : currentOrder.pergunta2,
     pergunta3 : currentOrder.pergunta3,
     pergunta4 : currentOrder.pergunta4,
     pergunta5 : currentOrder.pergunta5,
      status:"rejected"
    }));
    orderNull();
  }

  return (
    currentAnimal== null ?<></>: 
    <>
      <HeaderMain />
      <div className="info-form-pedido">
        <div className="images">
          <img src={logo} className="lg" />

          <img
            src={currentAnimal && currentAnimal.img}
            alt="Imagem do Animal"
            id="img_animal"
          ></img>
        </div>
        <div className="info-form_lados">
          <div className="info-form-pedido_esquerda">
            <p className="topico_registro">Nome do adotante:</p>
            {currentOrder && (
              <p className="resp_registro">{currentOrder.nomeAdotante}</p>
            )}
            <p className="topico_registro">Celular do adotante:</p>
            {currentOrder && (
              <p className="resp_registro">{currentOrder.celAdotante}</p>
            )}
            <p className="topico_registro">CPF do adotante:</p>
            {currentOrder && (
              <p className="resp_registro">{currentOrder.cpfAdotante}</p>
            )}
            <p className="topico_registro">Email do adotante:</p>
            {currentOrder && (
              <p className="resp_registro">{currentOrder.emailAdotante}</p>
            )}
            <p className="topico_registro">Idade do adotante:</p>
            {currentOrder && (
              <p className="resp_registro">{currentOrder.idadeAdotante}</p>
            )}
          </div>

          <span className="linha_h"></span>

          <div className="info-form-pedido_direita">
            <p className="topico_registro">Nome do animal:</p>
            {currentOrder && (
              <p className="resp_registro">{currentOrder.nomeAnimal}</p>
            )}
            <p className="topico_registro">Idade do animal: </p>
            {currentAnimal && (
              <p className="resp_registro">{currentAnimal.idade}</p>
            )}
            <p className="topico_registro">Tipo do animal: </p>
            {currentAnimal && (
              <p className="resp_registro">{currentAnimal.tipo}</p>
            )}
            <p className="topico_registro">Porte do animal: </p>
            {currentAnimal && (
              <p className="resp_registro">{currentAnimal.porte}</p>
            )}
            <p className="topico_registro">Sexo do animal:</p>
            {currentAnimal && (
              <p className="resp_registro">{currentAnimal.sexo}</p>
            )}
          </div>
        </div>
        <div className="info-form-responsabilidade">
        <h3>Responsabilidade de Adoção</h3>
        <span className="sublinha-form-responsabilidade"></span>
        <div className="info-form-resp">

        <p className="topico_registro">1. Quem será o responsável pelo cuidado do animal?</p>
        {currentOrder && (
              <p className="resp_registro">{currentOrder.pergunta1}</p>
            )}
        <p className="topico_registro">2. Animais que não tem acesso à rua vivem 15 anos ou mais.
                    Você está pronto para esse compromisso e responsabilidade de
                    longo prazo?</p>
        {currentOrder && (
              <p className="resp_registro">{currentOrder.pergunta2 === "true" ? ("Sim"):("Não")}</p>
            )}
        <p className="topico_registro">3. Os animais precisam de cuidados com higiene, boa
                    alimentação e atendimento veterinário. Você tem como
                    providenciar isso?</p>
        {currentOrder && (
              <p className="resp_registro">{currentOrder.pergunta3 === "true" ? ("Sim"):("Não")}</p>
            )}
        <p className="topico_registro">4. Você já tem um médico veterinário?</p>
        {currentOrder && (
              <p className="resp_registro">{currentOrder.pergunta4 === "true" ? ("Sim"):("Não")}</p>
            )}
        <p className="topico_registro">5. Em caso de emergência, tem como levar seu animal
                    imediatamente ao veterinário?</p>
        {currentOrder && (
              <p className="resp_registro">{currentOrder.pergunta5 === "true" ? ("Sim"):("Não")}</p>
            )}                

        </div>

        </div>
      </div>
      <div className="botoes">

        <button id="btn-acept" onClick={handleVerify}>
        <FiCheck style={{fontSize:30}}/>
          aceitar
        </button>
        <button id="btn-cancel" onClick={handleDenied}>
        <FiX style={{fontSize:30}}/>
          recusar
        </button>
        

      </div>

      <Footer />
    </>
  );
};

export default VerificarPedido;
