import styled from 'styled-components';

export const Single = styled.div`
    background-color: #F2F4F7;
    padding: 80px 0 80px 0;
`

export const Content = styled.div`
    text-align: start;
    font-size: 18px;

    img{
        height: 400px;
        width: 50%;
        object-fit: cover;
        border-radius: 10px;
        display: block;
        margin: 0 auto;
    }

    a{
        color: #C41740;
        font-weight: bold !important;
    }

    @media(max-width: 576px) {
       img{
        width: 100%;
       }
    }
    
`

export const Constrat = styled.div`
    text-align: center;

    img{
        border-radius: 10px;
    }

    @media(max-width: 576px) {
       img{
        width: 100%;
       }
    }
`