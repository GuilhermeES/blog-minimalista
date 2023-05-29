import {Container} from '../../styled/Container.styled'
import {Title, Footer} from './style'

export default function Hero() {
    function getDate() {
        const dateFooter = new Date();
        return dateFooter.getFullYear();
    }

    return(
        <>
            <Footer>
                <Container textalign="center"> 
                    <Title> Copy {getDate()} <br/> Blog produzido por Gui </Title>
                </Container>
            </Footer>
        </>
    )
}