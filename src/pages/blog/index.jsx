import { useEffect, useState } from 'react'
import Hero from '../../components/Hero/index'
import { Container } from '../../styled/Container.styled'
import { Colum, Row } from '../../styled/Grid.styled'
import { Articles } from '../home/style'
import Article from '../../components/Article/single/index'
import {Pagination} from './style'

export default function Blog() {    

    const [posts, setPosts] = useState([]);
    const [pageNumbers, setPageNumbers] = useState([]);

    function getPost() {
        fetch(`https://strongest.com.br/wp-json/wp/v2/posts?per_page=9&page=1`)
        .then(response => {
            setPageNumbers([...pageNumbers, ...Array(Number(response.headers.get('X-Wp-Totalpages'))).keys() ])
            return response.json()
        })
        .then(result => { 
            setPosts(result)
        })
    }

    function getActualPosts(current) {
        setPosts([])
        fetch(`https://strongest.com.br/wp-json/wp/v2/posts?per_page=9&page=${current}`)
        .then(response => {
            return response.json()
        })
        .then(result => { 
            setPosts(result)
        })
    }

    useEffect(() => {
       getPost()
    }, [])

    return(
        <>
            <Hero/>
            <Articles>
                <Container>
                    <Row>
                       {posts.map(post => 
                            <Colum sm="12" md="6" lg="4" key={post.id} >
                                <Article
                                    key={post.id} 
                                    data={post.date}
                                    id={post.id}
                                    title={post.title.rendered}
                                    desc={post.excerpt.rendered}
                                    link={post.slug}
                                    img={post.yoast_head_json.og_image[0].url}
                                />
                            </Colum>
                        )}
                    </Row>
                    <Pagination>
                        {pageNumbers.map((number, index) => 
                            <div onClick={() => getActualPosts(index)} key={index}>{number}</div>    
                        )}
                    </Pagination>
                </Container>
            </Articles>
        </>
    )
}