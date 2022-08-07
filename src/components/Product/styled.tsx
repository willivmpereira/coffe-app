import styled from "styled-components";

export const Product = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 2rem 0;
`

export const Display = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: end;
    justify-content: center;
    gap: 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 0;
    }
`

export const ContentInfo = styled.div`
    h3{
        font-weight: 500;
        text-transform: uppercase;
        font-size: 1.25rem;
    }
    h2{
        font-weight: 400;
        font-size: 2rem;
        margin-top: 1.5rem;
    }
    p{
        font-size: 0.85rem;
        margin-top: 1.5rem;
        line-height: 1.6;
    }
    a{
        color: #ff8900;
        text-decoration: none;
        margin: 1.5rem 0 2rem;
        display: inline-block;

        &:hover{

            svg{
                margin-left: 1rem;
            } 
        }

        svg{
            transition: all 0.5s;
            margin-left: 0.5rem;
        }
        
    }
`

export const ContentImg = styled.div`
    display: flex;
    justify-content: center;
`