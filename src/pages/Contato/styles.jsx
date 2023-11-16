import styled from "styled-components";
import { Form,Breadcrumb } from "react-bootstrap";

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

export const FormContato = styled.form`
width: 31.25rem;
display: flex;
flex-direction: column;
gap: 0.9rem;
  
`;
export const InputGroup = styled.div`
width: 31.25rem;
display: flex;
flex-direction: column;

input, textarea{
  width: 100%;
  padding: 0.7rem;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  border-radius: 5px;

  &:focus{
    border: 1px solid ${(props) => props.theme["blue"]};
    box-shadow: 0 0 4px ${(props) => props.theme["blue"]};
  }
}


`;

export const ContentButton = styled.div`
width: 100%;
display: flex;
margin-bottom: 2rem;
justify-content: right;
  button{
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    border: 0;
    background-color:  ${(props) => props.theme["blue"]};
    color: white;
    transition: 1s;

    &:hover{
      background-color:  ${(props) => props.theme["blue-black"]};
    }
  }
`;


