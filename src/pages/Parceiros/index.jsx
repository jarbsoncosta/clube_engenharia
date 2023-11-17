import Breadcrumb from "react-bootstrap/Breadcrumb";
import { HeaderComponent } from "../../components/Header";
import {
  Card,
  Container,
  Content,
  ContentCards,
  StyleBreadcrumb,
  Title,
} from "./styles";
import { FooterComponent } from "../../components/Footer";
import { Link } from "react-router-dom";
import ImgLogo from "../../assets/logos/solut.png";
import ImgLogo1 from "../../assets/logos/lmt.png";

export function ParceirosPage() {
  return (
    <Container>
      <HeaderComponent />
      <Content>
        <StyleBreadcrumb>
          <Breadcrumb.Item href="/">
            {" "}
            <i class="fa-solid fa-house"></i> Início
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Parceiros</Breadcrumb.Item>
        </StyleBreadcrumb>

        <Title>
          <i class="fa-solid fa-users-gear"></i>
          <strong>NOSSOS PARCEIROS</strong>
          <div>
            <p>
              Aqui você vai enconcontar parceiros do Clube de engenharia do RN
            </p>

            <ContentCards>
              <Card>
                <img src={ImgLogo} alt="" />
              </Card>
              <Card>
                <img
                  style={{ border: "1px solid #d1d5db " }}
                  src={ImgLogo1}
                  alt=""
                />
              </Card>
              <Card>
                <img
                  style={{ border: "1px solid #d1d5db " }}
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_SWYl0g1FVsROYA9yFW-w8wwaqlVwwuu-DRV-hzhe4r8MMLHLPUTYiH-iAJjnlwVnq4&usqp=CAU"
                />
              </Card>
              <Card>
                <img
                  style={{ border: "1px solid #d1d5db " }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_SWYl0g1FVsROYA9yFW-w8wwaqlVwwuu-DRV-hzhe4r8MMLHLPUTYiH-iAJjnlwVnq4&usqp=CAU"
                  alt=""
                />
              </Card>
              <Card>
                <img
                  style={{ border: "1px solid #d1d5db " }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_SWYl0g1FVsROYA9yFW-w8wwaqlVwwuu-DRV-hzhe4r8MMLHLPUTYiH-iAJjnlwVnq4&usqp=CAU"
                  alt=""
                />
              </Card>
            </ContentCards>
          </div>
        </Title>
      </Content>
      <FooterComponent />
    </Container>
  );
}
