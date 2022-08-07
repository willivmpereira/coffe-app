import * as S from './styled'
import { Container } from '../Container'
import Imagem from 'next/image'
import embalageCoffe from '../../../public/img/embalageCoffe.png'

export const Qualities = () => {
    return (
        <S.Qualities>
            <Container>
                <S.Title>Lorem ipsun dolor site</S.Title>
                <S.Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</S.Subtitle>
                <S.Display>
                    <S.ContentInfoOne>
                        <ul>
                            <li>
                                <h5>The Perfect Coffe</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. In eget tempus tortor sagittis suspendisse.</p>
                            </li>
                            <li>
                                <h5>The Perfect Coffe</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. In eget tempus tortor sagittis suspendisse.</p>
                            </li>
                            <li>
                                <h5>The Perfect Coffe</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. In eget tempus tortor sagittis suspendisse.</p>
                            </li>
                        </ul>
                    </S.ContentInfoOne>
                    <S.ContentImg>
                        <Imagem src={embalageCoffe} alt="Embalagem do Café" width={250} height={409}/>
                    </S.ContentImg>
                    <S.ContentInfoTwo>
                        <ul>
                            <li>
                                <h5>The Perfect Coffe</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. In eget tempus tortor sagittis suspendisse.</p>
                            </li>
                            <li>
                                <h5>The Perfect Coffe</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. In eget tempus tortor sagittis suspendisse.</p>
                            </li>
                            <li>
                                <h5>The Perfect Coffe</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. In eget tempus tortor sagittis suspendisse.</p>
                            </li>
                        </ul>
                    </S.ContentInfoTwo>
                </S.Display>
            </Container>
        </S.Qualities>
    )
}