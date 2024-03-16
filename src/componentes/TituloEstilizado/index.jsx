import styled from "styled-components"


const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`
const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`
const Banner = ({texto, backgroundImage}) => {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>
            <TituloEstilizado>
                {texto}
            </TituloEstilizado>
        </FigureEstilizada>)
}

export default Banner

/**
FigureEstilizada:

background-image: A gente está definindo a imagem de fundo aqui. E veja só, não estamos colocando um link direto de imagem. Em vez disso, estamos usando algo chamado "props" (que são basicamente informações que você passa para o componente quando o usa). Se você der uma olhada nessa linha: ${props => url(${props.$backgroundImage})} - isso é JavaScript puro no meio do CSS! O que estamos fazendo aqui é pegar a propriedade $backgroundImage (que você passaria para o componente) e usar como URL para a imagem de fundo.

flex-grow: 1: Isso faz com que o componente ocupe todo o espaço disponível em um container que usa flexbox, caso haja espaço extra.

background-repeat: no-repeat: A gente não quer que a imagem de fundo se repita, certo? Então, isso aqui garante a não repetição.

display: flex: Transforma o componente em um container flexbox. Isso ajuda a alinhar itens dentro dele de forma mais fácil e flexível.

align-items: center: Como estamos usando flexbox, essa propriedade garante que todos os itens dentro do nosso componente fiquem centralizados verticalmente.

min-height: 328px: Isso garante que o nosso componente tenha, pelo menos, 328 pixels de altura. É um tamanho bem específico, né? Provavelmente tem alguma razão de design por trás disso.

margin: 0: Simplesmente remove as margens. Assim, o componente fica bem juntinho de qualquer coisa ao seu redor.

border-radius: 20px: Isso dá ao componente bordas arredondadas, o que pode dar um visual mais moderno e suave.

max-width: 100%: Isso garante que o componente nunca seja mais largo do que o container em que está. Evita que ele "vaze" para fora.

background-size: cover: Isso dimensiona a imagem (preservando sua proporção) para o menor tamanho possível para preencher o contêiner, não deixando nenhum espaço vazio. 


TituloEstilizado:

font-weight: 400: Isso determina a "espessura" da fonte. O valor 400 é basicamente o peso "normal". Então, mesmo sendo um título, ele não está super grosso ou em negrito.

font-size: 40px: Esse é o tamanho da fonte. 40 pixels é bem grande, fazendo jus ao fato de ser um título.

line-height: 48px: A altura da linha determina o espaço vertical entre as linhas de texto. 48 pixels garante que, se o título tiver várias linhas, elas não fiquem muito apertadas entre si.

color: #FFFFFF: Isso define a cor do texto. E esse código hexadecimal, #FFFFFF, é a forma chique de dizer "branco". Então, o título será branco!

max-width: 300px: Isso limita a largura máxima do título a 300 pixels. Mesmo que o texto seja longo, ele vai quebrar e ir para a próxima linha depois de atingir esse limite.

padding: 0 64px: Aqui está um pouco de mágica do CSS! O padding é o espaço interno de um elemento. E esses dois valores significam o seguinte: o primeiro valor (0) é o espaçamento superior e inferior, e o segundo valor (64px) é o espaçamento à esquerda e à direita. Portanto, esse título terá um bom espaço dos lados, mas não terá espaçamento extra no topo ou na parte inferior.
 */

