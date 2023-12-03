// Modal.js
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Modificado para align-items: flex-start para posicionar o modal no topo */
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export const ModalContent = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 60rem;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  margin-top: 5vh; /* Adicionado margin-top para posicionar o modal no topo com algum espaço */
 
`;

export const ContentInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;
`;


export const ModalTitle = styled.div`  
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3{
    font-weight: 700;
    color:  ${(props) => props.theme["blue-black"]};
  }
`;

export const ModalImage = styled.img`
margin-top: 2rem;
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 5px;
`;

export const ModalText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;
