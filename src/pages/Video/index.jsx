import Breadcrumb from "react-bootstrap/Breadcrumb";
import { HeaderComponent } from "../../components/Header";
import {
  CardContent,
  Container,
  Content,
  InfoVideo,
  InputGroup,
  StyleBreadcrumb,
  Title,
} from "./styles";
import { videos } from "./videos";
import { useState } from "react";
import { FooterComponent } from "../../components/Footer";
import { Card, Form, Pagination } from "react-bootstrap";
import { ComponenteModal } from "./ComponenteModal";

export function VideosPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(10);
  const [filter, setFilter] = useState("");

  //Modal
  const [modalShow, setModalShow] = useState(false);

  // Filtre todos os vídeos com base na descrição, data e nome
  const filteredVideos = videos.filter(
    (video) =>
      video.descricao.toLowerCase().includes(filter.toLowerCase()) ||
      video.nome.toLowerCase().includes(filter.toLowerCase()) ||
      video.data.toLowerCase().includes(filter.toLowerCase())
  );

  // Calcule as páginas
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  // Mude a página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Função para recuperar o video selecionado
  const [data, setData] = useState(null);
  function videoSelecionado(props) {
    setData(props);
    setModalShow(true);
  }

  
  return (
    <Container>
      <HeaderComponent />
      <Content>
        <StyleBreadcrumb>
          <Breadcrumb.Item href="/"> <i class="fa-solid fa-house"></i> Início</Breadcrumb.Item>
          <Breadcrumb.Item active>Tutoriais</Breadcrumb.Item>
        </StyleBreadcrumb>

        <Title>
          <i className="fa-solid fa-video"></i>
          <strong>TUTORIAIS </strong>
        </Title>
        <p>
          Aqui você pode encontrar videos de enumeras atividades nas mais
          diversas áreas da engenharia.
        </p>
        <div>
          <div>
            {/* Filtro por descrição */}

            <InputGroup>
              <input
                type="text"
                placeholder="Filtre por Título, Data e Descrição"
                id="email"
                name="email"
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setCurrentPage(1); // Reset a página ao aplicar o filtro
                }}
              />
            </InputGroup>

            {/* Lista de vídeos */}
            {currentVideos.map((video) => (
              <CardContent>
                <img
                  onClick={() => videoSelecionado(video)}
                  src={video.imagem}
                  width={250}
                  alt=""
                />

                <InfoVideo>
                  <h4>{video?.nome} </h4>
                  <span>{video?.descricao} </span>
                  <span>{video?.data} </span>
                </InfoVideo>
              </CardContent>
            ))}

            {/* Paginação */}
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "right",
              }}
            >
              <Pagination>
                {Array.from({
                  length: Math.ceil(filteredVideos.length / videosPerPage),
                }).map((_, index) => (
                  <Pagination.Item
                    key={index}
                    active={index + 1 === currentPage}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          </div>
        </div>
      </Content>
      <FooterComponent />
      <ComponenteModal
        data={data}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
}
