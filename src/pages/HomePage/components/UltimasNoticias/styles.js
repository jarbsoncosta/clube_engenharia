import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* background-color: ${(props) => props.theme["gray50"]}; */
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 71.25rem;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 2rem;
`;

export const CardsNoticias = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;

export const Card = styled.div`
  width: calc(33.33% - 1rem); /* Para garantir que haja espaço entre os cards */
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-sizing: border-box;
  flex-grow: 1;
  background-color: ${(props) => props.theme["gray-100"]};
  img {
    width: 100%;
    height: 20rem;
    border-radius: 5px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%; /* Em telas menores, ocupar 100% da largura */
  }
`;

//Informações do card
export const InfoCard = styled.div`
  .data {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;

    i {
      font-size: 1.2rem;
      color: ${(props) => props.theme["blue-black"]};
    }
  }
  strong {
    font-size: 1.2rem;
    color: ${(props) => props.theme["blue-black"]};
  }
  button {
    margin-top: 2rem;
    background-color: ${(props) => props.theme["yellow-300"]};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 0;
    font-weight: 500;
    &:hover {
        color: #0f172a;
        background-color: #f59e0b;
      }
  }
`;
