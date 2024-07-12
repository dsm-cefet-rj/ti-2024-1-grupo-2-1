import React, { useEffect } from "react";
import "./index.css";
import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";
import PedidoAdocao from "../../components/PedidosAdocao";
import { getRegisters } from "../../redux/pedidoAdocao/slice";
import { useDispatch, useSelector } from "react-redux";
import  Grade  from "../../components/GridContainer";
import TitlePage from "../../components/Title-Page";

/**
 * @module Page/Tela_de_admPedidos
 *  
 */
/**
* @typedef AdmPedidos
* @type {React.FC}
*/
/**
* Componente React para gerenciar a visualização e edição de pedidos de adoção
* @returns {React.FC} - Um componente React que renderiza a tela de pedidos de adoção.
 */


const AdmPedidos = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector(
    (rootReducer) => rootReducer.pedidoAdocaoReducer
  );
  const { status } = useSelector(
    (rootReducer) => rootReducer.pedidoAdocaoReducer
  );
  console.log(orders);

  useEffect(() => {
    dispatch(getRegisters()); // Carregar dados no useEffect

    if (status === "deleted") {
      dispatch(getRegisters());
    }
  }, [orders.length]); // Dependências vazias para evitar execuções subsequentes(colocado orders
    // para cada vez q a quantidade for alterada, recarregar os pedidos)
  return (
    <>
      <HeaderMain />
      <div className="container-div">
        <TitlePage text="Pedidos de Adoção"/>
        <div className="cardpedidos-div">
          {orders != 0 ? (
            <Grade>
              {Object.values(orders).map((pedido) => (
                <PedidoAdocao key={pedido.id} pedido={pedido} />
              ))}
            </Grade>
          ) : (
            <div className=" espaço-preenchidoPedidos">
              {" "}
              <p>Não há Pedidos de adoção ainda</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmPedidos;
