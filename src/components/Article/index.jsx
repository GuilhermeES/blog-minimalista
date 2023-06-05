import {Colum, Row} from '../../styled/Grid.styled'
import {ArticleItem, Data, Title, Subtitle, Image} from './style'
import { Link } from "react-router-dom";

export default function Article ({ data, id, title, desc, link,img }) {

    function formateDate(date){
        let getDate = date.split("T")[0];
        let newDate = getDate.split("-").reverse().join("-");
        return newDate;
    }

    return (
        <>
            <ArticleItem>
                <Row>
                    <Colum sm="12" md="6" lg="6">
                        <Data>{formateDate(data)}</Data>
                        <Link to={'blog/' + link} state={{id:`${id}`}}>
                            <Title>{title}</Title>
                        </Link>
                        <Subtitle dangerouslySetInnerHTML = {{__html: desc}}></Subtitle>
                    </Colum>
                    <Colum sm="12" md="6" lg="6" $textAlign="end">
                        <Image src={img}/>
                    </Colum>
                </Row>  
            </ArticleItem>
        </>
    )
}