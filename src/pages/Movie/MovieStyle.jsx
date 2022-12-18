import styled from "styled-components";

export const ContainerMovie = styled.section`
  display: flex;
  flex-direction: column;
  color: rgb(255, 255, 255);
  max-width: 600px;
  margin: 2rem auto;
  svg {
    font-size: 1.5rem;
    color: rgb(255, 119, 5);
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    background-color: rgb(0, 0, 0);
  }
  section img,
  section h2,
  section p {
    margin-bottom: 1rem;
  } 
  section h2{
    font-size: 2rem;
  }
  section p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
  }

`;