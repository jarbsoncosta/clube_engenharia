import { styled } from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0 ;
  align-items: center;
  background: ${(props) => props.theme["blue"]};
  margin-top: auto;
  a{
    color: #172554;
    font-weight: 500;
    text-decoration: none;
    
    &:hover{
    color: ${(props) => props.theme["yellow-300"]};
    
  }
  }

`;

export const InfoFooter = styled.div`
  display: flex;
  gap: 1rem;
  color: white;
  span{
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;
