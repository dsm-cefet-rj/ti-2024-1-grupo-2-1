import React,{useEffect,useState} from 'react';
import "./styles.css";

const ErrorMessage = ({text}) => {
    const [ativo, setAtivo] = useState(false);

    useEffect(() => {
      if (text != "") {
        setAtivo(true);
        setTimeout(() =>{ setAtivo(false)}, 2000); // Tempo de exibição da mensagem
      }
    }, [text]);
  
    return(
    <div className={`ErrorContainer ${ativo && 'ativo'}`}>
      <text className="ErrorText">{text}</text>
    </div>
  ) 
}

export default ErrorMessage
