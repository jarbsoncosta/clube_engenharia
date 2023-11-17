import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const ContentCards = styled.div`
  margin: 0 auto;
  display: flex;
  width: 71.25rem;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 0 0 0;
  `;

export const Card = styled(NavLink)`
  width: 13rem;
  height: 9rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  background-color: #f0f0f0;
  color: #00328e;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;

  .fa-solid {
    font-size: 3.5rem;
  }

  &:hover {
    transform: scale(1.1);
    animation: pulse 1.5s infinite;
    text-decoration: none;
    border: 2px solid #3980d4;
    background-color: #e2e8f0;
    color: #00328e;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
