import "./index.css"
import { React } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteRequest } from "../../redux/pedidoAdocao/slice";

export const PedidoAdocao = ({pedido}) => {
    
    const id = pedido.id;
    console.log(id)
    const dispatch = useDispatch()
    
    const handleClick = (e) => {
        e.preventDefault();
        // navigate(`/detalhamentoPedido/${id}`);
        {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }

    const Delete = (e) =>{
        e.preventDefault();
        dispatch(deleteRequest(id));
        window.location.reload();
    }  
    return(
        <div className="cardadocao-main-div">
            <div className="left-side-div">
                <h3>Adotante: {pedido.nomeAdotante}</h3>
                <h3>Nome animal: {pedido.nomeAnimal}</h3>
            </div>
            <div className="right-side-div">
                <button id="btn-verify" onClick={ handleClick }>VERIFICAR</button>
            </div>
            <MdOutlineCancel className="Pedido_Cancel" onClick={Delete}/>
        </div>
    )
}

export default PedidoAdocao;