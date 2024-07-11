import "./style.css";
/** 
 * @module Componente/Layout
 *  */

/** 
 * @typedef Layout
 * @type {React.FC}
*/

/** 
 * Renderiza o layout base da aplicação, contendo um container principal e um formulário.
 * @param {React.ReactNode} props.children - Conteúdo a ser renderizado dentro do layout.
 * @returns {React.FC} O componente renderizado.
*/
const Layout = (props) => {
  return (
    <div className="contaner">
      <div className="contaner-form">
        <div className="wrap-form">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout