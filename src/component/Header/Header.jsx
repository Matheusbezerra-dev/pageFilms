import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <BiCameraMovie /> Page Films        
      </Link>
      <form >
        <input 
          type="text"
          placeholder="Qual o nome do Filme?"
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </header>
  );
}
