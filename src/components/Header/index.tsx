import * as S from './styled'
import { Container } from "../Container"
import bagCoffe from '../../../public/img/bagCoffe.png'

export default function Header(){
    return (
        
            <S.Header>
            <Container>
            <div className='content__header'>
                <S.Display>
                    <S.ContentInfo>
                        <h1>Rich Coffe Blend in every cup</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent
                            elementum facilisis leo, vel fringilla est ullamcorper</p>
                            <a href="#">Saiba mais 
                                <svg width="57" height="11" viewBox="0 0 57 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="4.37114e-08" y1="5.5" x2="49" y2="5.5" stroke="white"/>
                                    <path d="M57 5.5L48.75 10.2631L48.75 0.73686L57 5.5Z" fill="white"/>
                                    </svg>
                                    
                            </a>
                    </S.ContentInfo>
                    <div>
                        <S.ImageCoffe
                            src={bagCoffe} 
                            alt="Imagem Foco" 
                            width={558} 
                            height={458}
                            layout="responsive" 
                        />
                    </div>
                </S.Display>
            </div>
            </Container>
        </S.Header>
    )
}