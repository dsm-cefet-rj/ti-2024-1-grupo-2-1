import HeaderMain from "../../components/HeaderMain"
import Footer from "../../components/Footer"

export const Detalhamento = () => {

    return (
        <div>
            <HeaderMain/>
                <h1>Nome do Animal</h1>
                <div>
                    <h2>Localização do Animal:</h2>
                    <h2>Publicador:</h2>
                    <h2>Acessos à página:</h2>
                </div>
                <div>
                    <h2>História do Animal</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eaque!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eaque!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eaque!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eaque!</p>
                </div>
            <Footer/>
        </div>
    );

};

export default Detalhamento;
