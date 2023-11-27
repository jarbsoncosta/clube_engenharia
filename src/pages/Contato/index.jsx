import Breadcrumb from "react-bootstrap/Breadcrumb";
import { HeaderComponent } from "../../components/Header";
import {
  Container,
  Content,
  ContentButton,
  FormContato,
  InputGroup,
  StyleBreadcrumb,
  Title,
} from "./styles";
import { FooterComponent } from "../../components/Footer";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

export function ContatoPage() {
  const [isLoading, setIsLoading] = useState(false);
  // Função para enviar email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_xeb4f2p",
        "template_6l97j5q",
        form.current,
        "P0eyRxEU5kjl2fYcK"
      )
      .then(
        () => {
          toast.success("Sua mensagem foi enviada com sucesso!");
          setIsLoading(false);
          e.target.reset();
        },
        (error) => {
          toast.error("Erro ao enviar mensagem, tente novamente mais tarde!");
          console.log(error);
          setIsLoading(false);
        }
      );
  };

  return (
    <Container>
      <HeaderComponent />
      <Content>
        <StyleBreadcrumb>
          <Link to="/">
            <i class="fa-solid fa-house"></i> Início
          </Link>
          <Breadcrumb.Item href="#"> </Breadcrumb.Item>
          <Breadcrumb.Item active>Contato</Breadcrumb.Item>
        </StyleBreadcrumb>

        <Title>
          <i class="fa-solid fa-envelope"></i>
          <strong>CONTATO</strong>
        </Title>

        <FormContato ref={form} onSubmit={sendEmail}>
          <p>Envie um mensagem para o Clube de engenharia do RN</p>
          <InputGroup>
            <label htmlFor="name">Assunto *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Assunto "
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="name">Nome *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Nome "
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              placeholder="email@example.com"
              id="email"
              name="email"
              required
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="message">Mensagem *</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Digite aqui sua mensagem"
            ></textarea>
          </InputGroup>
          <ContentButton>
            {isLoading ? (
              <button type="submit">
                {" "}
                <Spinner style={{width:"25px", height:"25px"}} animation="border" variant="light" />
              </button>
            ) : (
              <button type="submit">Enviar</button>
            )}
          </ContentButton>
        </FormContato>
      </Content>

      <FooterComponent />
    </Container>
  );
}
