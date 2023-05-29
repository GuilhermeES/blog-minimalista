import styled from 'styled-components';

function getWidth(item) {
    if(!item) return;

    let width = item / 12 * 100;
    return `width: ${width}%`;
}

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: ${prop => prop.alignItem ? prop.alignItem : 'center'};

`

export const Colum = styled.div`

    ${({xs}) => (xs ? getWidth(xs) : "width:100%" )};
    text-align: ${prop => prop.$textAlign ? prop.$textAlign : 'start'};

    @media(min-width: 768px) {
        ${({sm}) => sm && getWidth(sm) };
    }

    @media(min-width: 992px) {
        ${({md}) => md && getWidth(md) };
    }
    
    @media(min-width: 1200px) {
        ${({lg}) => lg && getWidth(lg) };
    }
`