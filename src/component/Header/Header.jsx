import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { ContainerHeader, TitleH2, FormHeader, SearchInput, ButtonHeader } from './HeaderStyle';

export default function Header() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault()
      if(!search) return;
      navigate(`/search?q=${search}`);
      setSearch("");
    }
  return (
    <ContainerHeader>
      <TitleH2>
        <Link to="/">
          <BiCameraMovie /> Page Films        
        </Link>
      </TitleH2>
      <FormHeader onSubmit={handleSubmit}>
        <SearchInput 
          type="text"
          placeholder="Qual o nome do Filme?"
          onChange={(e) => setSearch(e.target.value)}
          value={ search }
        />
        <ButtonHeader type="submit">
          <BiSearchAlt2 />
        </ButtonHeader>
      </FormHeader>
    </ContainerHeader>
  );
}
