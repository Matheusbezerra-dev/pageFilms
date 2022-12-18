import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import {
  ContainerCard,
  ImgCard,
} from './CardStyle';


export default function Card({films, showLink = true}) {

  const imgUrl = import.meta.env.VITE_IMG

  return (
    <ContainerCard id={films.title}>
      <ImgCard 
        src={`${imgUrl}${films.poster_path}`}
        alt={`Imagens do ${films.title}`}
      />
      <h2>
        {films.title}
      </h2>
      <p>
        <FaStar /> { films.vote_average }
      </p>
      {showLink &&
        <>
          <Link to={`/movie/${ films.id }`}>Detalhes</Link>
        </>
      }
    </ContainerCard>
  );
}

