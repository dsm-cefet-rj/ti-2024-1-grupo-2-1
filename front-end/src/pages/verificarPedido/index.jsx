import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { useParams } from "react-router-dom";
import { getOneRegister, updateRequest, orderNull, getRegisters } from "../../redux/pedidoAdocao/slice";
import { useEffect , useState} from "react";
import HeaderMain from "../../components/HeaderMain/index";
import Footer from "../../components/Footer/index";
import ContainerInfo from "../../components/Container-Info";
import { useNavigate } from "react-router-dom";
import { fetchOneAnimal, patchStatus } from "../../redux/Animais/slice";
import SuccessMessage from "../../components/SuccessMessage";
import { FiCheck, FiX } from "react-icons/fi";
import logo from "../../assets/logopreta2.png";


/**
 * @module Page/Verificar_Pedidos
 * 
 */
/**
 * @typedef VerificarPedido
 * @type {React.FC}
 */
/**
 * Renderiza uma pagina onde é feita a validação do pedido de adoção, por parte do adm.
 * @returns {React.FC} - Componente
 */
const VerificarPedido = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [success, setSuccess]= useState("");
  console.log(id);
  const dispatch = useDispatch();
  const { orders } = useSelector(
    (rootReducer) => rootReducer.pedidoAdocaoReducer
  );
  const { animals } = useSelector((rootReducer) => rootReducer.animalReducer);
  const pedido =
    orders &&
    orders.filter((pedido) => {
      if (id === pedido.id) return pedido;
    });
const currentOrder = pedido[0];
  console.log(currentOrder)
  // const { currentAnimal } = useSelector(
  //   (rootReducer) => rootReducer.animalReducer
  // );
  // const { status } = useSelector((rootReducer) => rootReducer.userReducer);

  

  useEffect(() => {
    dispatch(getRegisters);
  }, []);
  
  const animais =
  animals &&
  animals.filter((animal) => {
   if (currentOrder.idAnimal === animal.id) return animal;
 });

const currentAnimal = animais[0];

   /**
   * @function handleVerify -Função responsavel aceitar o pedido de adoção do animal
   * @param {*} e - Evento
   */
  const handleVerify = (e) =>{
    e.preventDefault();
     
    dispatch(updateRequest({
      id : currentOrder.id,
     idAnimal : currentOrder.idAnimal,
     nomeAnimal : currentOrder.nomeAnimal,
     idadeAnimal:currentOrder.idadeAnimal,
      imgAnimal:currentOrder.imgAnimal,
    tipoAnimal:currentOrder.tipoAnimal,
    porteAnimal:currentOrder.porteAnimal,
    sexoAnimal:currentOrder.sexoAnimal,
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
    dispatch(patchStatus({currentAnimal, adopted: true}))
    setSuccess("Pedido Atualizado com Sucesso!");
    setTimeout(()=>{
      setSuccess('')
    },1500)
    setTimeout(() =>{
      navigate("/admin_pedidos");
    }, 1500)
  }

  /**
   * @function handleDenied -Função responsavel negar o pedido de adoção do animal
   * @param {*} e - Evento
   */
  const handleDenied = (e) =>{
    e.preventDefault();
    
    dispatch(updateRequest({
      id : currentOrder.id,
     idAnimal : currentOrder.idAnimal,
     nomeAnimal : currentOrder.nomeAnimal,
     idadeAnimal:currentOrder.idadeAnimal,
      imgAnimal:currentOrder.imgAnimal,
    tipoAnimal:currentOrder.tipoAnimal,
    porteAnimal:currentOrder.porteAnimal,
    sexoAnimal:currentOrder.sexoAnimal,
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
    dispatch(patchStatus({currentAnimal, adopted: false}))
    setSuccess("Pedido Atualizado com Sucesso!");
    setTimeout(()=>{
      setSuccess('')
    },1500)
    setTimeout(() =>{
      navigate("/admin_pedidos");
    }, 1500)
  }

  return (
    // currentAnimal == null ?<></>: 
    <>
      <HeaderMain />
      <div className="info-form-pedido">
        <div className="images">
          <img src={logo} className="lg" />

          <img
            src={currentOrder && require(`../../images/${currentOrder.imgAnimal}`)}
            alt="Imagem do Animal"
            id="img_animal"
          ></img>
        </div>
          <div className="info-Principais">
            <ContainerInfo
            label={"Nome do adotante:"}
            info={currentOrder.nomeAdotante}
            label2={"Nome do animal:"}
            info2={currentOrder.nomeAnimal}
            />
          </div>
        <div className="info-form_lados">
          <div className="info-form-pedido_esquerda">
            <ContainerInfo
            label={"Celular do adotante:"}
            label2={"CPF do adotante:"}
            info={currentOrder.celAdotante}
            info2={currentOrder.cpfAdotante}
            />
             <ContainerInfo
            label={"Email do adotante:"}
            label2={"idade do adotante:"}
            info={currentOrder.emailAdotante}
            info2={currentOrder.idadeAdotante}
            />
          </div>

          <span className="linha_h"></span>

          <div className="info-form-pedido_direita">
          <ContainerInfo
            label={"Idade do animal:"}
            label2={"Tipo do animal:"}
            info={currentOrder.idadeAnimal}
            info2={currentOrder.tipoAnimal}
            />
            <ContainerInfo
            label={"Porte do animal:"}
            label2={"Sexo do animal:"}
            info={currentOrder.porteAnimal}
            info2={currentOrder.sexoAnimal}
            />
          </div>
        </div>
        <div className="info-form-responsabilidade">
        <h3 className="subtittle">Responsabilidade de Adoção</h3>
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
              <p className="resp_registro">{currentOrder.pergunta2 === true ? ("Sim"):("Não")}</p>
            )}
        <p className="topico_registro">3. Os animais precisam de cuidados com higiene, boa
                    alimentação e atendimento veterinário. Você tem como
                    providenciar isso?</p>
        {currentOrder && (
              <p className="resp_registro">{currentOrder.pergunta3 === true ? ("Sim"):("Não")}</p>
            )}
        <p className="topico_registro">4. Você já tem um médico veterinário?</p>
        {currentOrder && (
              <p className="resp_registro">{currentOrder.pergunta4 === true ? ("Sim"):("Não")}</p>
            )}
        <p className="topico_registro">5. Em caso de emergência, tem como levar seu animal
                    imediatamente ao veterinário?</p>
        {currentOrder && (
              <p className="resp_registro">{currentOrder.pergunta5 === true ? ("Sim"):("Não")}</p>
            )}                

        </div>

        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center" ,justifyContent:"space-between"}}>
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
          <SuccessMessage text={success}/>
      </div>

      <Footer />
    </>
  );
};

export default VerificarPedido;
