import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { ContainerHeader, TitleH2, FormHeader, SearchInput, ButtonHeader } from './HeaderStyle';

export default function Header() {
  return (
    <ContainerHeader>
      <TitleH2>
        <Link to="/">
          <BiCameraMovie /> Page Films        
        </Link>
      </TitleH2>
      <FormHeader >
        <SearchInput 
          type="text"
          placeholder="Qual o nome do Filme?"
        />
        <ButtonHeader type="submit">
          <BiSearchAlt2 />
        </ButtonHeader>
      </FormHeader>
    </ContainerHeader>
  );
}
