import styled from "styled-components";
import Image from 'next/image'

export const Testimonials = styled.section`
    padding: 4rem 0;
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
    grid-template-columns: repeat(3, 1fr);
    margin-top: 5rem;

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const TestimonialContent = styled.div`
    margin: 2rem 0;
`

export const DataTestimonial = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`

export const ThumbImg = styled(Image)`
    border-radius: 50%;
`

export const InfoTestimonial = styled.div`
    display: flex;
    align-items: flex-start;
    gap: .5rem;

    h4{
        margin: 0;
    }

    p{
        text-align: left;
        margin-top: 0.5rem;
    }

    ul{
        display: flex;
        padding: 0;
        margin: 0;
        list-style: none;
        gap: .25rem;
    }
`

export const TextTestimonial = styled.div`
    p{
        font-size: 0.85rem;
        margin-top: .5rem;
        text-align: left;
    }
`