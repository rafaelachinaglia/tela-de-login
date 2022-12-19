import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Input from "./components/Input";
import Botão from "./components/Botao";
import Icone from "./components/Icone";

function App() {
  const FaceBookBackground = "linear-gradient(to right, #0546A0 0%, #663FB6 100%)";
  const InstagramBackground = "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground = "linear-gradient(to right, #56C1E1 0%, #35A9CE 58%)";

  return (
    <ContainerPrincipal>
      <Texto>Entrar</Texto>
      <ImputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </ImputContainer>
      <BotaoContainer>
        <Botão content="Logar" />
      </BotaoContainer>
      <LogarComo>Ou logar com</LogarComo>
      <LinhaHorizontal />
      <IconesContainer>
        <Icone color={FaceBookBackground}>
          <FaFacebookF />
        </Icone>
        <Icone color={InstagramBackground}>
          <FaInstagram />
        </Icone>
        <Icone color={TwitterBackground}>
          <FaTwitter />
        </Icone>
      </IconesContainer>
      <RecuperaSenha>Esqueceu a senha?</RecuperaSenha>
    </ContainerPrincipal>
  );
}

const ContainerPrincipal = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8.5px);
  border-radius: 12px;
  box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);
  color: white;
  display : flex;
  flex-direction: column;
  height: 90vh;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  width: 35vw;

  @media only screen and (max-width: 320px) {
    height: 90vh;
    width: 80vw;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }

  @media only screen and (min-width: 360px) {
    height: 90vh;
    width: 80vw;
    h4 {
      font-size: small;
    }
  }

  @media only screen and (min-width: 411px) {
    height: 90vh;
    width: 80vw;
  }

  @media only screen and (min-width: 768px) {
    height: 80vh;
    width: 80vw;
  }

  @media only screen and (min-width: 1024px) {
    height: 90vh;
    width: 70vw;
  }

  @media only screen and (min-width: 1280px) {
    height: 90vh;
    width: 30vw;
  }
`;

const Texto = styled.h2`
  margin: 2rem 0 2rem 0;
`;

const ImputContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 20%;
  justify-content: space-around;
  width: 100%;
`;

const BotaoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1rem 0 2rem 0;
  width: 100%;
`;

const LogarComo = styled.h5`
  cursor: pointer;
`;

const LinhaHorizontal = styled.hr`
  backdrop-filter: blur(25px);
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  border: none;
  border-radius: 0.8rem;
  height: 0.2rem;
  margin: 1.5rem 0 1rem 0;
  width: 80%;
`;

const IconesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0 2.5rem 0;
  width: 80%;
`;

const RecuperaSenha = styled.h4`
  cursor: pointer;
`;



export default App;
