import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 15px;
    text-align: ${prop =>  prop.textalign ? prop.textalign : 'start' };
`
