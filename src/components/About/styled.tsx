import styled from "styled-components"
import Image from 'next/image'

export const AboutUs = styled.section`
    background: linear-gradient(90deg, rgba(133,92,87,1) 0%, rgba(133,92,87,1) 35%, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 100%);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;

    @media screen and (max-width: 768px) {
        height: 100%;
        margin: 4rem 0;
        background: transparent;
    }
`

export const Display = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const ContentImage = styled.div`
    
`
export const ContentText = styled.div`
    
    p{
        font-size: 0.9rem;
    }

    ul{
        display: flex;
        padding: 0;
        list-style: none;
        gap: 1rem;
        margin-top: 2.5rem;

        @media screen and (max-width: 768px) {
            justify-content: center;
        }

    }
`

export const ThumbImage = styled(Image)`
    border-radius: 50%;
`