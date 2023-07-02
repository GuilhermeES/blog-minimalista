import {Container} from '../../styled/Container.styled'
import {Title, Subtitle, Page, HeaderHero} from './style'

export default function Hero() {
    return(
        <>
            <HeaderHero>
                <Container textalign="center"> 
                    <Page>⛺ Homepage </Page>
                    <Title>Um blog minimalista.</Title>
                    <Subtitle>
                        Um blog para colocar em práticas os principais conceitos em React e mais.   
                    </Subtitle>
                    <Subtitle>
                        Components - Props - React hooks básicos - React Router - Styled Components - API WP
                    </Subtitle>
                </Container>
            </HeaderHero>
        </>
    )
}