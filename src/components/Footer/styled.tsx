import styled from "styled-components"

export const Footer = styled.footer`
    padding: 3rem 0;
    background-color: #855c57;
`

export const ContentFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h2{
        color: #FFF;
    }
`

export const InfoFooter = styled.div`
    display: flex;
    gap: 5rem;

    ul{
        list-style: none;
        padding: 0;
        
        li{
            margin: 0.5rem 0;

            a{
                color: #FFF;
                transition: 0.5s;   
                text-decoration: none;
            }
        }
    }
`

export const MenuFooter = styled.div`
    ul{
        list-style: none;
        padding: 0;

        li{
            margin: .5rem 0;
            a{
                color: #FFF;
                text-decoration: none;
            }
        }
    }
`
export const copy = styled.div`
    p{
        text-align: center;
        color: #FFF;
    }
`