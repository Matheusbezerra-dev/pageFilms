import styled from 'styled-components';
import loading from '../../images/loading-13.gif';

const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100vw;
  @media (max-width: 600px) {
    width: 100vw;
    height: 150vw;
  }
`;

const ImgLoading = styled.img`
  width: 200px;
  height: 200px;
`;

export default function Loading() {
  return(
    <ContainerLoading>
      <ImgLoading 
        src={loading}
        alt="loading"
      />
    </ContainerLoading>
  );
}