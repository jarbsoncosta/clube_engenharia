import Carousel from "react-bootstrap/Carousel";
import { HeaderComponent } from "../../components/Header";
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";
import Banner3 from "../../assets/banner3.png";
import { CardsComponents } from "../../components/Cards";
import { FooterComponent } from "../../components/Footer";
import { Container } from "./styles";
import { ComponenteUltimasNoticias } from "./components/UltimasNoticias";

export function HomePage() {
  return (
    <Container>
      <HeaderComponent />
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        {/* Adicione mais itens conforme necessário */}
      </Carousel>
      <CardsComponents />

      <ComponenteUltimasNoticias />

      <FooterComponent />
    </Container>
  );
}
