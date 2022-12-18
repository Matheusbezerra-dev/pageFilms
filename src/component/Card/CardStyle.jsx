import styled from 'styled-components';

export const ContainerCard = styled.section`
  width: 30%;
  color: rgb(255, 255, 255);
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(18, 18, 18);
  padding: 1rem;
  border-radius: 5px;
  h2, p, img {
    margin-bottom: 1rem;
  }
  svg {
    color: rgb(255, 255, 0);
  }
  a {
    background-color: rgb(255, 119, 5);
    border: 2px solid rgb(255, 119, 5);
    border-radius: 5px;
    color: rgb(0, 0, 0);
    padding: 1rem 0.5rem;
    text-align: center;
    align-items: center;
    transition: 400ms;
    font-weight: bold;
    box-shadow: 1px 1px 5px 1px rgb(0, 0, 0);
    :hover {
    background-color: transparent;
    color: rgb(255, 119, 5);
  }
  }
`;

export const ImgCard = styled.img`
  max-width: 100%;
  border-radius: 2px;
  box-shadow: 1px 1px 5px 2px rgb(0, 0, 0);
`;

