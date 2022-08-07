import styled from "styled-components"

export const Contact = styled.section`
    padding: 3rem 0;
    background-color: #E5E5E5;
`

export const Display = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const FormGroup = styled.div`
        margin: 1rem 0;


        input{
            display: block;
            width: 100%;
            font-size: 1rem;
            padding: 0.5rem;
            border-radius: .25rem;
            border: 1px solid black;
            margin-top: 0.25rem;
        }
        textarea{
            display: block;
            width: 100%;
            font-size: 1rem;
            padding: .5rem;
            border-radius: .25rem;
            border: 1px solid black;
        }
`

export const ButtonSubmit = styled.button`
    background-color: #ff8900;
    color: #FFF;
    border: none;
    padding: 0.75rem 2rem;
    display: flex;
    align-items: center;
    width: 300px;
    border-radius: 4px;
    cursor: pointer;

    &:hover{

        svg{
            margin-left: 1rem;
        } 
    }
    
    svg{
        transition: all 0.5s;
        margin-left: .5rem;
    }
`

export const ContactInfo = styled.div`
    margin-top: 1rem;

    ul{
        list-style: none;
        padding: 0;

        li{
            margin: 1rem 0;

            a{
                color: #000;
                display: inline-block;
                text-decoration: none;
            }
        }
    }
`