import Breadcrumb from "react-bootstrap/Breadcrumb";
import { HeaderComponent } from "../../components/Header";
import { Container, Content, StyleBreadcrumb, Title } from "./styles";
import { FooterComponent } from "../../components/Footer";

export function SobrePage() {
  return (
    <Container>
      <HeaderComponent />
      <Content>
        <StyleBreadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Sobre</Breadcrumb.Item>
        </StyleBreadcrumb>

        <Title>
          <i className="fa-solid fa-shop"></i>
          <strong>NOSSA HISTÓRIA</strong>
          <div>
            <p>
              Lorem ipsum dolor sit amet. Cum voluptatibus consequatur sit
              itaque odit cum voluptas earum ut mollitia nesciunt. Et quasi
              recusandae est dolor fuga et galisum perspiciatis. Et delectus
              facere sed quos iste qui voluptate vitae sed commodi nihil ut
              asperiores repudiandae qui voluptatem galisum. Ad consequatur
              consequatur est explicabo accusamus aut perspiciatis dolorum et
              voluptatibus amet. Ut harum velit et amet inventore qui omnis
              fugit hic illo quidem qui provident praesentium At galisum quia.
              Eum libero rerum hic suscipit veniam hic soluta officiis quo
              ratione nobis id consequatur dolorem est galisum quisquam. Non
              voluptas architecto est ullam dicta vel architecto fugiat ut
              voluptas voluptatem id illo omnis.
            </p>
          </div>
        </Title>
      </Content>
      <FooterComponent />
    </Container>
  );
}
