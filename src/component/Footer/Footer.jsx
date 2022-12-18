import { ContainerFooter, ImgFooter, P } from './FooterStyle';
import heart from '../../images/coração.png';

export default function Footer() {
  return(
    <ContainerFooter>
      <P>Feito com <ImgFooter src={heart} alt="com amor" /> por <a href='https://www.linkedin.com/in/matheusbezerra-dev/' target='_blank'>Matheus Bezerra</a></P>
    </ContainerFooter>
  );
}