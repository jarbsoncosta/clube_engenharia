import { ContentInfo, ModalContent, ModalImage, ModalOverlay, ModalText, ModalTitle } from "./styles";

export function ComponenteModalInfoNoticias({ isOpen, closeModal, data }) {
   console.log(data)
  
  if (!isOpen) return null;  

  return (
    <ModalOverlay onClick={closeModal}>

    
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <ModalTitle>
        <h3>{data?.title}</h3>
        <span>{data?.descricao} </span>
      </ModalTitle>
     <ContentInfo>
     <ModalImage src={data?.imagem} alt={data?.title} />
     {/*  dangerouslySetInnerHTML={{ __html: data.content }} recebe um htlm do campo data.content */}
      <ModalText dangerouslySetInnerHTML={{ __html: data.content }}></ModalText>
     </ContentInfo>
    </ModalContent>
  </ModalOverlay>
  );
}

