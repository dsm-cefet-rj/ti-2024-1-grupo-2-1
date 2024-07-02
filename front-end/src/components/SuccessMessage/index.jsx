import React,{useState, useEffect} from 'react';
import "./styles.css";

export const SuccessMessage = ({text}) => {
  const [ativo, setAtivo] = useState(false);

    useEffect(() => {
      if (text != "") {
        setAtivo(true);
        setTimeout(() =>{ setAtivo(false)}, 2000); // Tempo de exibição da mensagem
      }
    }, [text]);
  
    return text ? (
    <div className={`SuccessContainer ${ativo && 'ativo'}`}>
      <text className="SuccessText">{text}</text>
    </div>
  ) : null
}


