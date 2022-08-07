import * as S from './styled'
import Image from 'next/image'
import { Container } from '../Container'
import coffeAbout from '../../../public/img/coffe.png'

export const About = () => {
    return (
        <S.AboutUs>
            <Container>
                <S.Display>
                    <S.ContentImage>
                        <Image 
                            src={coffeAbout} 
                            alt="Imagem Café" 
                            
                        />
                    </S.ContentImage>
                    
                    <S.ContentText>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend diam pretium eget semper. At
                            orci at volutpat nunc sed. Fames diam urna, erat a, tristique lacus, at lectus. Sem lacinia sapien
                            massa quisque maecenas ut. Eleifend turpis sed quam egestas. Bibendum tortor lorem sed
                            ipsum. Ornare sollicitudin aliquet congue adipiscing aliquam vitae.
                            
                            Amet, phasellus nibh nisl, morbi purus. Vitae nisi, placerat proin in. Ultricies a dui, quam sit. Leo
                            viverra ornare gravida diam, amet. Purus dui tortor in tellus bibendum et. Mattis massa vitae,
                            sagittis, vitae cum. Maecenas morbi massa posuere eget libero imperdiet tincidunt. Blandit
                            suscipit libero in tincidunt. Lobortis in urna ut sit amet mus non sapien dictum. Enim ullamcorper
                            fusce risus egestas tincidunt quisque ultricies faucibus neque. Maecenas tincidunt lacus, sit
                            eget amet arcu, nulla. Nisl et dui amet pellentesque rhoncus habitant suspendisse enim.
                            Convallis eu, turpis amet, magna non ac. Hac massa eget massa, orci duis facilisis dui.
                            
                            Sit dolor habitasse volutpat tortor aliquam mauris massa. Amet nisl etiam ullamcorper
                            suspendisse vitae mauris mattis ultricies. Integer quisque sagittis hendrerit nec amet tristique at
                            nisi, pulvinar. Habitasse nam amet et sed. Molestie dapibus mattis faucibus risus. Ullamcorper
                            vitae ullamcorper lorem gravida amet amet nulla.
                        </p>
                        <ul>
                            <li>
                                <S.ThumbImage
                                    src={coffeAbout} 
                                    alt="Imagem Café" 
                                    width={100}
                                    height={100}
                                />
                            </li>
                            <li>
                                <S.ThumbImage 
                                    src={coffeAbout} 
                                    alt="Imagem Café"
                                    width={100}
                                    height={100}
                                />
                            </li>
                            <li>
                                <S.ThumbImage 
                                    src={coffeAbout} 
                                    alt="Imagem Café"
                                    width={100}
                                    height={100}
                                />
                            </li>
                        </ul>
                    </S.ContentText>
                </S.Display>
            </Container>
        </S.AboutUs>
    )
}
