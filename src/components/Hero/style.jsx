import styled from 'styled-components';

export const HeaderHero = styled.section`
    padding: 70px 0 70px 0;
`
export const Page = styled.span`
    background-color: #F2F4F7;
    padding: 16px;
    font-weight: 700;
    color: #1D2939;
    border-radius: 20px;

    @media (max-width:576px) {
        display: block;
    }
`
export const Title = styled.h1`
    font-size: 50px;
    color: #C41740;
    font-weight: 700;

    @media (max-width:576px) {
        font-size: 34px;
    }
`
export const Subtitle = styled.p`
    font-size: 25px;
    font-weight: 400;
    color: #475467;
`