import styled from "styled-components";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
 
`;
export const Content = styled.div`
   width: 71.25rem;
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
  margin-top: 3rem;
  border-bottom: 1px solid ${(props) => props.theme["gray-200"]};
`;

export const Title = styled.div`
  margin-top: 3rem;
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

export const ContentCards = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;  
margin: 2rem 0 5rem 0;
gap: 2rem;
`;
export const Card = styled.div`

  img{
    border-top-right-radius: 10px ;
    border-top-left-radius: 10px ;
    width: 150px;
    border-radius: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  

 
`;


