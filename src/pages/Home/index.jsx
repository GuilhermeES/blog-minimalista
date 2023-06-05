import Hero from '../../components/Hero/index'
import Article from '../../components/Article/index'
import Footer from '../../components/Footer/index'


import { Container } from '../../styled/Container.styled'
import {Articles, Loader} from './style'
import {Colum, Row} from '../../styled/Grid.styled'
import {Title} from '../../styled/Texts.sytled'
import {Button} from '../../styled/Buttons.styled'
import { useState, useEffect } from 'react'

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://strongest.com.br/wp-json/wp/v2/posts?per_page=5')
        .then(response => response.json())
        .then(res => { 
            setPosts(res) 
            setLoading(false)
        })
    }, [])

    return (
        <>
            <Hero/>
            <Articles>
                <Container>
                    {loading 
                    ? 
                        <>
                            <Loader/>
                        </>
                    :
                        <> 
                            <Row>
                                <Colum sm="12" md="6" lg="6">
                                    <Title>Recentes</Title>
                                </Colum>
                                <Colum m="12" md="6" lg="6" $textAlign="end">
                                    <Button href="#">Ver todos</Button>
                                </Colum>
                            </Row>
                            {posts.map(post => 
                                <Article 
                                    key={post.id} 
                                    data={post.date}
                                    id={post.id}
                                    title={post.title.rendered}
                                    desc={post.excerpt.rendered}
                                    link={post.slug}
                                    img={post.yoast_head_json.og_image[0].url}
                                />
                            )} 
                        </>
                    }                                              
                </Container>
            </Articles>
            <Footer/>
        </>
    );
}