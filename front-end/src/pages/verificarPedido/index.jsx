import { useDispatch, useSelector } from "react-redux";
import "./index.css"
import { useParams } from "react-router-dom";
import { getOneRegister } from "../../redux/pedidoAdocao/slice";
import { useEffect } from "react";

export const VerificarPedido = () => {


    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentOrder } = useSelector((rootReducer) => rootReducer.pedidoAdocaoReducer);

    useEffect(() => {
        dispatch(getOneRegister(id));
    }, [])

    return(
        <>
        {currentOrder && <h1>Nome do adotante: {currentOrder.nomeAdotante}</h1>}
        {currentOrder && <h1>Nome do animal: {currentOrder.nomeAnimal}</h1>}
        {currentOrder && <h1>CPF adotante: {currentOrder.cpfAdotante}</h1>}
        </>
    );



};

export default VerificarPedido;