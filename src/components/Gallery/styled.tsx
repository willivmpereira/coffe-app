import styled from "styled-components";

export const Gallery = styled.div`
    padding: 3rem;

    @media(max-width: 768px) {
        display: none;
    }
`

export const Title = styled.h2`
    text-align: center;
    margin: 0;
`

export const SubTitle = styled.p`
    text-align: center;
    margin-top: 0;
`

export const Display = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row: 1fr 1fr 1fr;
    gap: 1rem;
    margin-top: 3rem;
`

export const GalleryImg = styled.div`
    &:nth-of-type(1){
        grid-area:  1 / 1 / 2 / 2;
    }
    &:nth-of-type(2){
        grid-area: 1 / 2 / 2 / 4;
    }
    &:nth-of-type(3){
        grid-area: 1 / 4 / 4 / 5;
    }
    &:nth-of-type(4){
        grid-area: 2 / 1 / 4 / 2;
    }
    &:nth-of-type(5){
        grid-area: 2 / 2 / 3 / 3;
    }
    &:nth-of-type(6){
        grid-area: 2 / 3 / 4 / 4;
    }
    &:nth-of-type(7){
        grid-area: 3 / 2 / 4 / 3;
    }
`