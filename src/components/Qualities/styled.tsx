import styled from "styled-components";

export const Qualities = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e9e2da;
    padding: 3rem 0;
`

export const Display = styled.div`
    display: grid;
    grid-template-columns: 1fr .5fr 1fr;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const Title = styled.h2`
    text-align: center;
    margin: 0;
`

export const Subtitle = styled.p`
    text-align: center;
    margin-top: 0;
`

export const ContentInfoOne = styled.div`
    text-align: right;

    @media(max-width: 768px) {
        text-align: left;
    }

    ul{
        list-style: none;
        padding: 0;
        
        li{
            margin: 1.5rem 1.5rem;

            h5{
                margin: 0;
            }
            
            p{
                font-size: .85rem;
                margin-top: 0.25rem;
                position: relative;
            }

            &:nth-of-type(2){
                margin-right: 3.5rem;
            }
        }
    }
`

export const ContentImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentInfoTwo = styled.div`
    text-align: left;

    @media(max-width: 768px) {
        text-align: left;
    }

    ul{
        list-style: none;
        padding: 0;

        h5{
            margin: 0;
        }
        
        li{
            margin: 1.5rem 1.5rem;
            
            p{
                font-size: .85rem;
                margin-top: 0.25rem;
                position: relative;
            }

            &:nth-of-type(2){
                margin-left: 3.5rem;

                @media(max-width: 768px){
                    margin-left: 1.5rem;
                }
            }
        }
    }
`