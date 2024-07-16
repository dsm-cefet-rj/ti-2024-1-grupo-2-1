import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./style.css"; // Importar o arquivo CSS com os estilos

/**
 * @module Page/QuemSomos
 * 
 */
/**
 * @typedef QuemSomos
 * @type {React.FC}
 */
/**
 * Renderiza uma pagina explicando como funciona e o que seria o site.
 * @returns {React.FC} - Componente React
 */

export const QuemSomos = () => {
  return (
    <div>
      <HeaderMain />
      <div className="quem-somos-container">
        {" "}
        {/* Adicionando a classe do CSS */}
        <h1>Quem somos</h1>
        <p>
          No Sistema de Adoção de Animais, somos uma equipe apaixonada por
          conectar animais adoráveis a lares amorosos. Nosso compromisso é criar
          uma plataforma inovadora e inclusiva que facilite o processo de
          adoção, promovendo o bem-estar animal e a felicidade das famílias.
          Combinamos nossa expertise em tecnologia com um profundo amor e
          respeito pelos animais para fornecer uma experiência transparente e
          emocionante para todos os envolvidos.
        </p>
        <p>
          Nossa equipe é composta por profissionais dedicados, desde
          desenvolvedores talentosos até especialistas em bem-estar animal,
          todos unidos por um objetivo comum: fazer a diferença na vida dos
          animais que tanto amamos. Acreditamos firmemente na importância da
          adoção responsável e estamos empenhados em educar e orientar os
          adotantes em cada etapa do processo, desde a seleção do animal até a
          integração em seu novo lar.
        </p>
        <p>
          Além de facilitar as adoções, também trabalhamos em estreita
          colaboração com abrigos de animais e organizações de resgate para
          fornecer suporte contínuo e promover iniciativas que visam reduzir o
          número de animais abandonados. Estamos comprometidos em ser uma voz
          para aqueles que não podem falar e em criar um mundo onde cada animal
          tenha a chance de viver uma vida feliz e saudável.
        </p>
        <p>
          No Sistema de Adoção de Animais, não somos apenas uma plataforma
          online, somos uma comunidade de amantes de animais dedicados a tornar
          o mundo um lugar melhor para nossos amigos peludos. Junte-se a nós
          nesta jornada e faça parte da mudança positiva na vida dos animais
          necessitados.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default QuemSomos;
