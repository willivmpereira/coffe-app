import * as S from './styled'
import { Container } from '../Container'
import Image from 'next/image'
import embalageCoffe from '../../../public/img/embalageCoffe.png'
// import coffeAbout from '../../../public/img/coffe.png'
// embalageCoffe.png

export const Product = () => {
    return (
        <S.Product>
            <Container>
            <S.Display>
                <S.ContentInfo>
                        <h3>Featured this week</h3>
                        <h2>Coal Miner’s Organic</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci facilisis aliquam urna id neque viverra nunc,
                            mauris, sollicitudin. Bibendum suscipit dictum elit, tellus dui, laoreet cursus. In parturient amet, urna nibh
                            condimentum. Feugiat a pellentesque erat in. Aenean vulputate eu diam sit cursus lacus. Cursus urna elit
                            donec neque platea vitae. Enim nisi in egestas in quis urna, tempus. Mi nec, id sit non. Placerat eu.
                        </p>
                        <a href="">Saiba mais
                            <svg width="57" height="11" viewBox="0 0 57 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="4.37114e-08" y1="5.5" x2="49" y2="5.5" stroke="#ff8900"/>
                                <path d="M57 5.5L48.75 10.2631L48.75 0.73686L57 5.5Z" fill="#ff8900"/>
                            </svg>
                        </a>
                </S.ContentInfo>

                <S.ContentImg>
                    <Image 
                        src={embalageCoffe} 
                        alt=""  
                        width={350} 
                        height={573}
                        />

                </S.ContentImg>
                </S.Display>
            </Container>
        </S.Product>
    )
}