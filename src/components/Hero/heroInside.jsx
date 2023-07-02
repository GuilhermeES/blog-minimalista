import {Container} from '../../styled/Container.styled'
import {Title, Page, HeaderHero} from './style'

export default function HeroInside({title}) {
    return(
        <>
            <HeaderHero>
                <Container textalign="center"> 
                    <Page>⛺ Home / Blog / {title} </Page>
                    <Title>{title}</Title>
                </Container>
            </HeaderHero>
        </>
    )
}