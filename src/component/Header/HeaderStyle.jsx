import styled from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
  background-color: rgb(18, 18, 18);
`;

export const TitleH2 = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const FormHeader = styled.form`
  display: flex;
  gap: 0.5rem;
`;

export const SearchInput = styled.input`
  padding: 0.2rem 0.8rem;
  border-radius: 5px;
  border: 1px solid rgb(18, 18, 18);
  @media (max-width: 450px) {
    width: 120px;
  }
`;

export const ButtonHeader = styled.button`
  background-color: rgb(255, 119, 5);
  border: 2px solid rgb(255, 119, 5);
  border-radius: 5px;
  color: rgb(0, 0, 0);
  padding: 0.3rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 400ms;
  :hover {
    background-color: transparent;
    color: rgb(255, 119, 5);
  }
`;

