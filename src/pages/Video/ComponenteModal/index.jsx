
import Modal from "react-bootstrap/Modal";
import { ButtonCloseModal, InfoVideo } from "../styles";

export function ComponenteModal(props) {
  const video = props.data;

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <iframe
          width="100%"
          height="707"
          src={video?.linkVideo}
          title="5 Razões que me fizeram escolher ser um Engenheiro de estruturas"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <InfoVideo style={{ width: "100%", display: "flex" }}>
          <h4>{video?.nome} </h4>
          <span>{video?.descricao} </span>
          <span>{video?.data} </span>
        </InfoVideo>
        <ButtonCloseModal onClick={props.onHide}>Fechar</ButtonCloseModal>
      </Modal.Footer>
    </Modal>
  );
}
