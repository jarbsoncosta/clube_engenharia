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
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            height: 0,
          }}
        >
          <iframe
            title={video?.title}
            src={video?.linkVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          ></iframe>
        </div>
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
