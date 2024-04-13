import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";





const CadastroAnimal = () => {

    const [animal, setAnimal] = useState({});

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [size, setSize] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState("");
    const [image, setImage] = useState("");
    const [history, setHistory] = useState("");

    // Utilizando o useEfect para verificar a captura de dados está ocorrendo

    useEffect(() => {
        console.log(`${animal.id}`);
        console.log(`${animal.isFav}`);
        console.log(`${animal.img}`);
        console.log(`${animal.nome}`);
        console.log(`${animal.tipo}`);
        console.log(`${animal.porte}`);
        console.log(`${animal.sexo}`);
        console.log(`${animal.idade}`);
        console.log(`${animal.história}`);
    }, [animal]);

    /*
    useEffect(() => {
        console.log(`${name}`);
        console.log(`${type}`);
        console.log(`${size}`);
        console.log(`${sex}`);
        console.log(`${age}`);
        console.log(`${history}`);
        console.log(`${image}`);
    }, [name, type, size, sex, age, history, image]);
    */

    const handleImageChange = (e) => {
        // estamos setando uma imagem padrão
        setImage("https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc");
    }

    return(
        <div>
            <HeaderMain/>
            <div className="div-container">
                <h1>Cadastro do Animal</h1>
                <div className="div-form">
                    <form>
                        <h4>Nome do Animal</h4>
                        <label for="animal-name">Nome:</label>
                        <input type="text" id="animal-name" name="animal-name" onChange={(e) => [setName(e.target.value)]}/>
                        
                        <h4>Tipo do animal</h4>
                        <input type="radio" id="dog" name="animal-type" value="Cachorro" onChange={(e) => [setType(e.target.value)]}/>
                        <label for="dog">Cachorro</label>
                        <input type="radio" id="cat" name="animal-type" value="Gato" onChange={(e) => [setType(e.target.value)]}/>
                        <label for="cat">Gato</label>

                        <h4>Porte do animal</h4>
                        <input type="radio" id="small" name="animal-size" value="Pequeno" onChange={(e) => [setSize(e.target.value)]}/>
                        <label for="small">Pequeno</label>
                        <input type="radio" id="medium" name="animal-size" value="Médio" onChange={(e) => [setSize(e.target.value)]}/>
                        <label for="medium">Médio</label>
                        <input type="radio" id="big" name="animal-size" value="Grande" onChange={(e) => [setSize(e.target.value)]}/>
                        <label for="big">Grande</label>

                        <h4>Sexo do animal</h4>
                        <input type="radio" id="male" name="animal-sex" value="Macho" onChange={(e) => [setSex(e.target.value)]}/>
                        <label for="male">Macho</label>
                        <input type="radio" id="female" name="animal-sex" value="Fêmea" onChange={(e) => [setSex(e.target.value)]}/>
                        <label for="female">Fêmea</label>

                        <h4>Idade do animal</h4>
                        <label for="animal-age">Idade: </label>
                        <input type="text" id="animal-age" name="animal-age" onChange={(e) => [setAge(e.target.value)]}/>

                        <h4>Imagem do animal</h4>
                        <input type="file" id="animal-image" name="animal-image" onChange={handleImageChange}/>

                        <h4>História do animal</h4>
                        <input type="text" id="animal-history" name="animal-history" onChange={(e) => [setHistory(e.target.value)]}/>
                    </form>
                    <div>
                        <button onClick={() => {
                            const AnimalJSON = {
                                id: null,
                                isfav: false,
                                img: image,
                                nome: name,
                                tipo: type,
                                porte: size,
                                sexo: sex,
                                idade: age,
                                história: history,
                            };

                            setAnimal(AnimalJSON);
                        }}>CLIQUE PARA SUBMIT</button>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );

};

export default CadastroAnimal;