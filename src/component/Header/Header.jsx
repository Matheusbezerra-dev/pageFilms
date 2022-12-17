import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">
        Home
      </Link>
      <Link to="/movie/2">
        Movie
      </Link>
      <Link to="/search">
        Search
      </Link>      
    </header>
  );
}
