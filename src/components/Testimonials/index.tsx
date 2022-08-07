import * as S from './styled'
import { Container } from '../Container'

import PhotoCliente from '../../../public/img/fff.png'

export const Testimonials = () => {
    return (
        <S.Testimonials>
            <Container>
                <S.Title>Lorem ipsum dolor site</S.Title>
                <S.SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</S.SubTitle>

                <S.Display>
                    <S.TestimonialContent>
                        <S.DataTestimonial>
                            <div>
                                <S.ThumbImg 
                                    src={PhotoCliente} 
                                    width={100} 
                                    height={100} 
                                    alt="Foto do cliente" 
                                />
                            </div>
                            <S.InfoTestimonial>
                                <div>
                                    <h4>Matt Robinson</h4>
                                    <p>Client</p>
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99999 1.6665L12.575 6.88317L18.3333 7.72484L14.1667 11.7832L15.15 17.5165L9.99999 14.8082L4.84999 17.5165L5.83332 11.7832L1.66666 7.72484L7.42499 6.88317L9.99999 1.6665Z" fill="#FF8900" stroke="#FF8900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99999 1.6665L12.575 6.88317L18.3333 7.72484L14.1667 11.7832L15.15 17.5165L9.99999 14.8082L4.84999 17.5165L5.83332 11.7832L1.66666 7.72484L7.42499 6.88317L9.99999 1.6665Z" fill="#FF8900" stroke="#FF8900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99999 1.6665L12.575 6.88317L18.3333 7.72484L14.1667 11.7832L15.15 17.5165L9.99999 14.8082L4.84999 17.5165L5.83332 11.7832L1.66666 7.72484L7.42499 6.88317L9.99999 1.6665Z" fill="#FF8900" stroke="#FF8900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99999 1.6665L12.575 6.88317L18.3333 7.72484L14.1667 11.7832L15.15 17.5165L9.99999 14.8082L4.84999 17.5165L5.83332 11.7832L1.66666 7.72484L7.42499 6.88317L9.99999 1.6665Z" fill="#FF8900" stroke="#FF8900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </li>
                                        <li>
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99999 1.6665L12.575 6.88317L18.3333 7.72484L14.1667 11.7832L15.15 17.5165L9.99999 14.8082L4.84999 17.5165L5.83332 11.7832L1.66666 7.72484L7.42499 6.88317L9.99999 1.6665Z" fill="#FF8900" stroke="#FF8900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </S.InfoTestimonial>
                        </S.DataTestimonial>
                        <S.TextTestimonial>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id porttitor nullam ullamcorper sit in tincidunt massa erat faucibus. Malesuada dignissim consequat.</p>
                        </S.TextTestimonial>
                    </S.TestimonialContent>
                </S.Display>
            </Container>
        </S.Testimonials>
    )
}