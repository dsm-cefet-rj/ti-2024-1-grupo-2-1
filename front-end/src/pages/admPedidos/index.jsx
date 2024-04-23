import React, { useEffect} from "react";
import "./index.css"
import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";
import PedidoAdocao from "../../components/PedidosAdocao";
import { getRegisters } from "../../redux/pedidoAdocao/slice";
import { useDispatch, useSelector } from "react-redux";
import { Grade } from "../../components/GridContainer";
import rootReducer from "../../redux/root-reducer";


export const AdmPedidos = () => {

    const dispatch = useDispatch();
    const { orders } = useSelector((rootReducer) => rootReducer.pedidoAdocaoReducer);
    const { status } = useSelector((rootReducer) => rootReducer.pedidoAdocaoReducer)
    console.log(orders);

  useEffect(() => {
    dispatch(getRegisters()); // Carregar dados no useEffect

    if(status === "deleted"){
        console.log("chegou aqui")
        dispatch(getRegisters());
    }
  }, []); // Dependências vazias para evitar execuções subsequentes
    return (
        <div>
            <HeaderMain/>
            <div className="container-div">
                <div>
                    <h1>Autenticação dos pedidos de adoção</h1>
                    <span id="linha"></span>
                </div>
                <div className="cardpedidos-div">
                {orders != 0 ?
                    (<Grade>
                        {Object.values(orders).map((pedido) => (
                            <PedidoAdocao key={pedido.id} pedido={pedido}/>
                        ))}
                        
                    </Grade>): (<div className=" espaço-preenchidoPedidos"> <p>Não Pedidos de adoção ainda</p></div>) 
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );


}

export default AdmPedidos;