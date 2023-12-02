import { Card, Container, ContentCards } from "./styles";

export function CardsComponents() {
  return (
    <Container>
      <ContentCards>
        <Card to="/videos">
          <i className="fa-solid fa-chalkboard-user"></i>
          TUTORIAIS
        </Card>
        <Card to="/">
          <i className="fa-solid fa-list-ul"></i>
          LICITAÇÕES
        </Card>
        <Card to="/parceiros">
        <i class="fa-solid fa-users-gear"></i>
          PARCEIROS
        </Card>
        <Card to="/associe-se">
          <i className="fa-solid fa-user-tie"></i>
          ASSOCIE-SE
         
        </Card>
        {/* <Card to="/">
          <i className="fa-solid fa-user-tie"></i>
          FILIE-SE
        </Card> */}
      </ContentCards>
    </Container>
  );
}
