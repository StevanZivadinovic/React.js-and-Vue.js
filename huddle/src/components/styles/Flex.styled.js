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

@media(max-width:${({theme})=>theme.mobile}){
    flex-direction:column;
    text-align:center;
    align-items:center; 
    
}
`