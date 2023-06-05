import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { Loader } from "../../home/style";
import HeroInside from "../../../components/Hero/heroInside";
import { Container } from "../../../styled/Container.styled";
import Footer from "../../../components/Footer/index";
import {Content, Constrat, Single} from './style';

export default function SinglePost() {
    const location = useLocation();

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://strongest.com.br/wp-json/wp/v2/posts/${location.state.id}`)
        .then(response => response.json())
        .then(res => { 
            setPost(res);
            setLoading(false);
        })
    }, [location])
    
    return(
        <>
            {loading 
            ?
                <>
                    <Loader/>
                </>
            :
                <>
                    <Container textalign="center">
                        <HeroInside title={post.title.rendered} />                    
                    </Container>

                    <Single>
                        <Container>
                            <Constrat>
                                <img src={post.yoast_head_json.og_image[0].url}/>
                            </Constrat>
                            <Content dangerouslySetInnerHTML = {{__html: post.content.rendered}}></Content>
                        </Container>
                    </Single>
                    
                    <Footer/>
                </>
            }
        </>
    )
}