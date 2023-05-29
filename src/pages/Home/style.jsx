import styled from 'styled-components';

export const Articles = styled.section`
    background-color: #F2F4F7;
    padding: 80px 0 80px 0;
`

export const Loader = styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    background:conic-gradient(#0000 10%,#C41740);
    -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
    animation:s3 1s infinite linear;
    margin: 0 auto;

  @keyframes s3 {
    to{transform: rotate(1turn)}
  }

`