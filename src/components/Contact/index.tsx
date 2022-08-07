import * as S from './styled'
import { Container } from '../Container'


export const Contact = () => {
    return (
        <S.Contact>
            <Container>
                <h2>Contato</h2>
                <S.Display>
                    <form action="">
                        <S.FormGroup>
                            <label>Nome</label>
                            <input type="text" id="name" name='name'/>
                        </S.FormGroup>
                        <S.FormGroup>
                            <label>Telefone</label>
                            <input type="text"/>
                        </S.FormGroup>
                        <S.FormGroup>
                            <label>E-mail</label>
                            <input type="email"/>
                        </S.FormGroup>  
                        <S.FormGroup>
                            <label>Mensagem</label>
                            <textarea name="mensagem" id=""></textarea>
                        </S.FormGroup>
                        <S.ButtonSubmit type="submit">Enviar mensagem
                            <svg width="57" height="11" viewBox="0 0 57 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="4.37114e-08" y1="5.5" x2="49" y2="5.5" stroke="white"/>
                                <path d="M57 5.5L48.75 10.2631L48.75 0.73686L57 5.5Z" fill="white"/>
                            </svg>
                        </S.ButtonSubmit>
                    </form>
                    <S.ContactInfo>
                        <p>Estamos apenas aguardando o seu contato,
                            que pode ser feito pelo formulário, e-mail, telefone ou WhatsApp.</p>

                        <ul>
                            <li>
                                <a href="#">contato@seusite.com</a>
                            </li>
                            <li>
                                <a href="#">
                                    (55) 11 90000-0000
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    (55) 11 90000-0000
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                   <p>Av Paulista, 000</p>
                                    <p>Bela Vista, São Paulo - SP</p>
                                    <p>CEP: 00000-000, CoWorking</p>
                                </a>
                            </li>
                        </ul>
                    </S.ContactInfo>
                </S.Display>
            </Container>
        </S.Contact>
    )
}