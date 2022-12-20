import styled from "styled-components";

export const ContainerPagination = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  margin-bottom: 3rem;
`;

export const ButtonPages = styled.button`
  font-size: 2rem;
  background-color: transparent;
  color: rgb(255, 119, 5);
  :hover {
    transition: 400ms;
    color: rgb(255, 80, 5);
  }
`;

export const NumberPages = styled.div`
  display: flex;
  font-size: 1.8rem;
  border: 2px solid rgb(255, 119, 5);
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

`;