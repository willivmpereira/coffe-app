import styled from "styled-components";
import Image from 'next/image'

export const Header = styled.header`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
`
export const Display = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    
`

export const ContentInfo = styled.div`
    h1{
        text-transform: uppercase;
        font-size: 3.5rem;
        line-height: 1.5;
    }

    p{
        margin-top: 1.5rem;
        font-size: 0.95rem;
        line-height: 1.5rem;
    }
    a{
        background-color: #ff8900;
        color: #FFF;
        text-decoration: none;
        padding: 1rem 2rem 1rem 2rem;
        border-radius: 4px;
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 250px;

        &:hover{
            svg{
                margin-left: 1rem;
            }
        }
        
        svg{
            transition: all 0.5s;
            margin-left: .5rem;
        }
    }
`



export const ImageCoffe = styled(Image)`
    max-width: 100%;
    height: auto;
`