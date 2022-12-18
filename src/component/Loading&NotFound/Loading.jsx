import styled from 'styled-components';
import loading from '../../images/loading-13.gif';

const ContainerLoading = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
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