import { NavLink } from "react-router-dom";
import { Card, Container, ContentCards } from "./styles";

export function CardsComponents() {
  return (
    <Container>
      <ContentCards>
        <Card to="/">
          <i class="fa-solid fa-chalkboard-user"></i>
          VIDEOS
        </Card>
        <Card to="/">
          <i class="fa-solid fa-list-ul"></i>
          LICITAÇÕES
        </Card>
        <Card to="/">
          <i class="fa-solid fa-users-viewfinder"></i>
          PARCEIROS
        </Card>
        <Card to="/">
          <i class="fa-solid fa-user-tie"></i>
          FILIE-SE
        </Card>
      </ContentCards>
    </Container>
  );
}
