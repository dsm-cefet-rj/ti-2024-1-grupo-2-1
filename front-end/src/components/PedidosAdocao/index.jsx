import "./index.css"
import { React } from 'react'

export const PedidoAdocao = ({pedido}) => {
    /*
    const id = pedido.id;
    adotante = pedido.nomeAdotante;
    nomeAnimal = pedido.nomeAnimal;
    */
    return(
        <div className="cardadocao-main-div">
            <div className="left-side-div">
                <h3>Adotante: {/*adotante*/}</h3>
                <h3>Nome animal: {/*nomeAnimal*/}</h3>
            </div>
            <div className="right-side-div">
                <button id="btn-verify">VERIFICAR</button>
            </div>
        </div>
    )
}

export default PedidoAdocao;