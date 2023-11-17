import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  height: 5rem;
  img {
    margin-top: -2.5rem;
    position: relative;
    width: 140px;
    @media (max-width: 590px) {
      width: 70px;
      margin-top: 0;
  }
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .nav-items {
    display: flex;
    align-items: center;
    gap: 2rem;
    .link-associe {
      background-color: #fbbf24;
      padding: 0.3rem 1rem;
      border-radius: 4px;
      color: #0f172a;
      border: none;
      font-weight: 500;
      transition: 1s;
      animation: pulse 1.7s infinite;
      margin-right: 1rem;
      &:hover {
        color: #0f172a;
        background-color: #f59e0b;
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
    }
  }
  .nav-items a {
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    color: ${(props) => props.theme["gray700"]};
    &:hover {
      color: ${(props) => props.theme["blue"]};
      border-bottom: 2px solid ${(props) => props.theme["blue"]};
    }
    &:focus {
      box-shadow: none;
    }
  }
`;
export const TopHeader = styled.div`
  background: #3980d4 none repeat scroll 0 0;
  display: flex;
  justify-content: right;
  padding: 2rem;
`;

//   .list-icons {
//     display: flex;
//     padding: 0 10rem;
//     gap: 1rem;
//   }
//   .list-icons li {
//     list-style: none;
//   }
//   .list-icons li a i {
//     color: #ffff;
//     font-size: 25px;
//   }

//   /*navbar*/

//   .header-container {
//     width: 100%;
//     height: 4rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color:#F5F5F5
//   }
//   .header-container img {
//     position: relative;
//     margin-top: -2.1rem;
//     width: 160px;
//   }
//   .nav {
//     min-width: 700px;
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//   }
//   .nav .nav-items {
//     display: flex;
//     gap: 2rem;
//   }
//   .nav .nav-items li a {
//     font-size: 1rem;
//     font-weight: bold;
//   }
