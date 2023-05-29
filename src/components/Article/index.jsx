import {Colum, Row} from '../../styled/Grid.styled'
import {ArticleItem, Data, Title, Subtitle, Link, Image} from './style'

export default function Article ({ data, title, desc, link,img }) {

    function formateDate(date){
        let getDate = date.split("T")[0];
        let newDate = getDate.split("-").reverse().join("-");
        return newDate;
    }

    function formateString(desc){
       let getDesc =  desc.replace(/(<([^>]+)>)/ig, '')
       console.log(getDesc)
       return getDesc;
    }

    return (
        <>
            <ArticleItem>
                <Row>
                    <Colum sm="12" md="6" lg="6">
                        <Data>{formateDate(data)}</Data>
                        <Link href={link}>
                            <Title>{title}</Title>
                        </Link>
                        <Subtitle>{formateString(desc)}</Subtitle>
                    </Colum>
                    <Colum sm="12" md="6" lg="6" $textAlign="end">
                        <Image src={img}/>
                    </Colum>
                </Row>  
            </ArticleItem>
        </>
    )
}