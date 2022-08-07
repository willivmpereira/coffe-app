import * as S from './styled'
import { Container } from '../Container'
import Image from 'next/image'

import CoffeOne from '../../../public/img/coffe1.jpg'
import CoffeTwo from '../../../public/img/coffe2.jpg'
import CoffeThree from '../../../public/img/coffe3.jpg'
import CoffeFour from '../../../public/img/coffe4.jpg'
import CoffeFive from '../../../public/img/coffe5.jpg'
import CoffeSix from '../../../public/img/coffe6.jpg'
import CoffeSeven from '../../../public/img/coffe7.jpg'

export const Gallery = () => {
    return (
        <S.Gallery>
            <Container>
                <S.Title>Lorem ipsum dolor site</S.Title>
                <S.SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</S.SubTitle>

                <S.Display>
                    <S.GalleryImg>
                        <Image src={CoffeOne} alt="" width={273} height={273} />
                    </S.GalleryImg>
                    <S.GalleryImg>
                        <Image src={CoffeTwo} alt="" width={562} height={273} />
                    </S.GalleryImg>
                    <S.GalleryImg>
                        <Image src={CoffeThree} alt="" width={273} height={709} />
                    </S.GalleryImg>
                    <S.GalleryImg>
                        <Image src={CoffeFour} alt="" width={273} height={420} />
                    </S.GalleryImg>
                    <S.GalleryImg>
                        <Image src={CoffeFive} alt="" width={273} height={197} />
                    </S.GalleryImg>
                    <S.GalleryImg>
                        <Image src={CoffeSix} alt="" width={273} height={421} />
                    </S.GalleryImg>
                    <S.GalleryImg>
                        <Image src={CoffeSeven} alt="" width={273} height={197} />
                    </S.GalleryImg>
                </S.Display>
            </Container>
        </S.Gallery>
    )
}