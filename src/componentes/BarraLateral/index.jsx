import styled from "styled-components"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ul>
                    <li>
                        <a href="">
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Mais curtidas
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default BarraLateral