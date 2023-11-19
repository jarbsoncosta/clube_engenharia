import styled from "styled-components";
import { Form, Breadcrumb } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
`;
export const Content = styled.div`
  width: 75rem;
  margin: 0 auto; /* Centraliza o conteúdo */
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  a {
    text-decoration: none;
    font-weight: 500;
  }
  @media (max-width: 1215px) {
    width: 100%;
  }
`;
export const StyleBreadcrumb = styled(Breadcrumb)`
  width: 100%;
  margin-top: 3rem;
  border-bottom: 1px solid ${(props) => props.theme["gray-200"]};
`;

export const Title = styled.div`
  margin: 2rem 0;
  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme["blue-black"]};
  }
  .fa-solid {
    font-size: 1.5rem;
    margin-right: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme["blue-black"]};
  }
  p {
    margin-top: 2rem;
    text-align: justify;
  }
`;

export const CardContent = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;
  width: 100%;
  margin-top: 1rem;
  border: 1px solid ${(props) => props.theme["gray-200"]};
  img {
    border-radius: 10px;
    width: 15.5rem ;
    cursor: pointer;
  }
  background-color: ${(props) => props.theme["gray50"]};
  @media (max-width: 650px) {
     display: block;
     img{
      width: 100%
     }
  }
`;

export const InfoVideo = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    color: #334155;
    font-weight: 500;
  }
  @media (max-width: 650px) {
    font-size: 80%;
    margin-top: 1rem;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    padding: 0.7rem;
    border: 1px solid ${(props) => props.theme["gray-400"]};
    border-radius: 5px;

    &:focus {
      border: 1px solid ${(props) => props.theme["blue"]};
      box-shadow: 0 0 4px ${(props) => props.theme["blue"]};
    }
  }
`;

export const ButtonCloseModal = styled.button`
  display: flex;
  align-items: centerF;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 4px;
  background-color: ${(props) => props.theme["blue"]};
  color: white;
  transition: 1s;
  &:hover {
    background-color: ${(props) => props.theme["blue-black"]};
  }
`;
