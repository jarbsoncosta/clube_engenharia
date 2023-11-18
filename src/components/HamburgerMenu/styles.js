import styled from 'styled-components';

export const MenuButton = styled.button`
display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  i{
    color: white;
  }
  @media (max-width: 590px) {
    display: block;
  }
`;

export const MenuContainer = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  z-index: 2; /* Ajuste o valor de z-index conforme necessário (maior que o botão) */
  top: 45px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-left: 0.7rem;
`;
export const MenuItem = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: left;
  a{
    text-decoration: none;
    font-size: 0.75rem;
    color: ${(props) => props.theme["gray700"]};
  }
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;