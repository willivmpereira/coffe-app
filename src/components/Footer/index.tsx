import * as S from './styled'
import { Container } from '../Container'

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <S.ContentFooter>
                    <h2>Logo</h2>
                    <S.InfoFooter>
                        <S.MenuFooter>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Produtos</a></li>
                                <li><a href="#">Serviços</a></li>
                                <li><a href="#">Contato</a></li>
                            </ul>
                        </S.MenuFooter>
                        <div>
                            <ul>
                                <li>
                                    <a href="#">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.875 1H4.95833C2.77221 1 1 2.77221 1 4.95833V12.875C1 15.0611 2.77221 16.8333 4.95833 16.8333H12.875C15.0611 16.8333 16.8333 15.0611 16.8333 12.875V4.95833C16.8333 2.77221 15.0611 1 12.875 1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M11.6666 8.00149C11.7643 8.66035 11.6518 9.33324 11.345 9.92446C11.0383 10.5157 10.5529 10.9951 9.95793 11.2946C9.36297 11.594 8.68874 11.6983 8.03114 11.5924C7.37353 11.4866 6.76603 11.1761 6.29505 10.7052C5.82407 10.2342 5.51359 9.62668 5.40778 8.96907C5.30196 8.31147 5.40619 7.63724 5.70565 7.04228C6.0051 6.44733 6.48454 5.96195 7.07575 5.65518C7.66697 5.34841 8.33986 5.23587 8.99872 5.33357C9.67079 5.43323 10.293 5.7464 10.7734 6.22681C11.2538 6.70723 11.567 7.32942 11.6666 8.00149Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12.8542 4.146H12.8625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 1H8.27273C7.0672 1 5.91104 1.50044 5.05861 2.39124C4.20617 3.28204 3.72727 4.49022 3.72727 5.75V8.6H1V12.4H3.72727V20H7.36364V12.4H10.0909L11 8.6H7.36364V5.75C7.36364 5.49804 7.45942 5.25641 7.6299 5.07825C7.80039 4.90009 8.03162 4.8 8.27273 4.8H11V1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 1.00841C18.2165 1.57307 17.349 2.00495 16.4309 2.28741C15.9382 1.70852 15.2833 1.29822 14.5548 1.112C13.8264 0.925781 13.0596 0.972624 12.3581 1.24619C11.6565 1.51977 11.0542 2.00686 10.6324 2.64161C10.2107 3.27636 9.98993 4.02813 10 4.79525V5.6312C8.56215 5.6693 7.13741 5.34348 5.85264 4.68277C4.56788 4.02207 3.46299 3.04698 2.63636 1.84435C2.63636 1.84435 -0.636364 9.36789 6.72727 12.7117C5.04225 13.8803 3.03495 14.4663 1 14.3836C8.36364 18.5633 17.3636 14.3836 17.3636 4.77018C17.3629 4.53733 17.341 4.30505 17.2982 4.07634C18.1332 3.23495 18.7225 2.17264 19 1.00841V1.00841Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13 6C14.3924 6 15.7277 6.55312 16.7123 7.53769C17.6969 8.52226 18.25 9.85761 18.25 11.25V17.375H14.75V11.25C14.75 10.7859 14.5656 10.3408 14.2374 10.0126C13.9092 9.68437 13.4641 9.5 13 9.5C12.5359 9.5 12.0908 9.68437 11.7626 10.0126C11.4344 10.3408 11.25 10.7859 11.25 11.25V17.375H7.75V11.25C7.75 9.85761 8.30312 8.52226 9.28769 7.53769C10.2723 6.55312 11.6076 6 13 6V6Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M4.25 6.875H0.75V17.375H4.25V6.875Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M2.5 4.25C3.4665 4.25 4.25 3.4665 4.25 2.5C4.25 1.5335 3.4665 0.75 2.5 0.75C1.5335 0.75 0.75 1.5335 0.75 2.5C0.75 3.4665 1.5335 4.25 2.5 4.25Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </S.InfoFooter>
                </S.ContentFooter>
                {/* <hr> */}
                <S.copy>
                    <p>William Pereira &copy;</p>
                </S.copy>
            </Container>
        </S.Footer>
    )
}