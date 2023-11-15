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
import { useState } from "react";

export function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com o envio do formulário
    console.log("Formulário submetido:", formData);
  };
  return (
    <Container>
      <HeaderComponent />
      <Content>
        <StyleBreadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contato</Breadcrumb.Item>
        </StyleBreadcrumb>

        <Title>
          <i class="fa-solid fa-shop"></i>
          <strong>CONTATO</strong>
        </Title>

      <p>Envie um mensagem para o Clube de engenharia do RN</p>
        <FormContato onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="name">Nome *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Nome "
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="message">Mensagem *</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Digite aqui sua mensagem"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </InputGroup>
          <ContentButton>
            <button type="submit">Enviar</button>
          </ContentButton>
        </FormContato>
      </Content>
      <FooterComponent />
    </Container>
  );
}