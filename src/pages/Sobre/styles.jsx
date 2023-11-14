import styled from "styled-components";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
 
`;
export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto; /* Centraliza o conteúdo */
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  a {
    text-decoration: none;
    font-weight: 500;
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
