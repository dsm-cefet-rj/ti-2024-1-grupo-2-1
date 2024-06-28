import "./index.css";
import { React } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteRequest } from "../../redux/pedidoAdocao/slice";
import { useNavigate } from "react-router-dom";

export const PedidoAdocao = ({ pedido }) => {
  const id = pedido.id;
  console.log(id);
  const dispatch = useDispatch();
  const  navigate = useNavigate(); 

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/verificando_pedido/${id}`);
    {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const Delete = (e) => {
    e.preventDefault();
    dispatch(deleteRequest(id));
  };
  return (
    <div className="cardadocao-main-div">
      <div className="left-side-div">
        <h3>Adotante: {pedido.nomeAdotante}</h3>
        <h3>Nome animal: {pedido.nomeAnimal}</h3>
      </div>
      <div className="right-side-div">
        
        <button id="btn-verify" onClick={handleClick}>
          DETALHES
        </button>
        {
        pedido.status == "pending" ?(
          <span className="status_pedido">
            status: NÃO VERIFICADO
          </span>
        ):(
          pedido.status == "approved" ?(
            <span className="status_pedido">
            status: <span style={{color:"green"}}>APROVADO</span>
          </span>

        ):(
          <span className="status_pedido">
           status: <span style={{color:"red"}}>NEGADO</span>
          </span>
        ))
      }
      </div>
      <MdOutlineCancel className="Pedido_Cancel" onClick={Delete} />
    </div>
  );
};

export default PedidoAdocao;
