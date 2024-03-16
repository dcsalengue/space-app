import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/TituloEstilizado"
import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  `
const APPContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;

`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const ConteudoGaleria = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
function App() {

  return (

    <FundoGradiente>
      <EstilosGlobais />
      <APPContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria />
          </ConteudoGaleria>
        </MainContainer>

      </APPContainer>
    </FundoGradiente>

  )
}

export default App
