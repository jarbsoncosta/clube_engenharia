import { Card, CardsNoticias, Container, Content, InfoCard } from "./styles";

export function ComponenteUltimasNoticias() {
  return (
    <Container>
      <Content>
        <h4>ÚLTIMAS NOTÍCIAS</h4>
        <CardsNoticias>
          <Card>
            <img
              style={{ border: "1px solid #d1d5db " }}
              src="https://blogdaengenharia.com/wp-content/uploads/2023/10/Construmetal-2023-Blog-da-Engenharia0-380x280.webp"
              alt=""
            />
             <InfoCard>
              <div className="data">
                <i class="fa-solid fa-calendar-days"></i>
                <span>02/12/2023</span>
              </div>
              <strong>Evento da engenharia</strong>
              <div>
                <button>SAIBA MAIS</button>
              </div>
            </InfoCard>
          </Card>
          <Card>
            <img
              style={{ border: "1px solid #d1d5db " }}
              src="https://www.alamoengenharia.com.br/wp-content/uploads/2020/01/eventos-gestao-de-facilities-alamo-engenharia.jpg"
              alt=""
            />
             <InfoCard>
              <div className="data">
                <i class="fa-solid fa-calendar-days"></i>
                <span>02/12/2023</span>
              </div>
              <strong>Evento da engenharia</strong>
              <div>
                <button>SAIBA MAIS</button>
              </div>
            </InfoCard>
          </Card>
          <Card>
            <img
              style={{ border: "1px solid #d1d5db " }}
              src="https://civilizacaoengenheira.files.wordpress.com/2019/02/enece.jpg?w=525"
              alt=""
            />
            <InfoCard>
              <div className="data">
                <i class="fa-solid fa-calendar-days"></i>
                <span>02/12/2023</span>
              </div>
              <strong>Evento da engenharia</strong>
              <div>
                <button>SAIBA MAIS</button>
              </div>
            </InfoCard>
          </Card>
          
        </CardsNoticias>
      </Content>
    </Container>
  );
}
