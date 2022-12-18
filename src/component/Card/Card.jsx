import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'

export default function Card({films, showLink = true}) {

  const imgUrl = import.meta.env.VITE_IMG

  return (
    <section>
      <img 
        src={`${imgUrl}${films.poster_path}`}
        alt={`Imagens do ${films.title}`}
      />
      <h2>
        {films.title}
      </h2>
      <p>
        <FaStar /> {films.vote_average}
      </p>
      {showLink &&
        <Link to={`/movie/${films.id}`}>Detalhes</Link>
      }
    </section>
  );
}

