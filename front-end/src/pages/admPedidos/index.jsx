import "./index.css"
import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";
import PedidoAdocao from "../../components/PedidosAdocao";
import { getRegisters } from "../../redux/pedidoAdocao/slice";
import { useDispatch } from "react-redux";

export const AdmPedidos = () => {

    const dispatch = useDispatch();
    const registersData = dispatch(getRegisters());

    return (
        <div>
            <HeaderMain/>
            <div className="container-div">
                <div>
                    <h1>Autenticação dos pedidos de adoção</h1>
                    <span id="linha"></span>
                </div>
                <div className="cardpedidos-div">
                    <PedidoAdocao/>
                    <PedidoAdocao/>
                    <PedidoAdocao/>
                </div>
            </div>
            <Footer/>
        </div>
    );


}

export default AdmPedidos;