import { useState } from "react";
import { ComponenteModalInfoNoticias } from "../../../../components/ModalInfoNoticias";
import { Card, CardsNoticias, Container, Content, InfoCard } from "./styles";
import { noticias } from "./noticias";

export function ComponenteUltimasNoticias() {
  const [modalOpen, setModalOpen] = useState(false);
  const [infoNoticia, setInfoNoticia] = useState(null);


  function openModal (data) {
    setInfoNoticia(data);
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <Content>
        <h4>ÚLTIMAS NOTÍCIAS</h4>
        <CardsNoticias>
          {noticias.map((item) => {
            return (
              <Card>
                <img
                  style={{ border: "1px solid #d1d5db " }}
                  src={item?.imagem}
                  alt=""
                />
                <InfoCard>
                  <div className="data">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span>{item?.dataPuplicada}</span>
                  </div>
                  <strong>{item?.title} </strong>
                  <div>
                    <button onClick={() => openModal (item)}>
                      SAIBA MAIS
                    </button>
                  </div>
                </InfoCard>
              </Card>
            );
          })}

          <ComponenteModalInfoNoticias
            isOpen={modalOpen}
            closeModal={closeModal}
            data={infoNoticia}
          />
        </CardsNoticias>
      </Content>
    </Container>
  );
}
