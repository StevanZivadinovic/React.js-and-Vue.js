import styled from "styled-components";


export const Flex = styled.div`
display:flex;
justify-items:center;


&>div, 
&>ul{
    flex:1;
}
div{
    p{
        color:#ff0099;
    }
}
`