import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import{
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from 'react-icons/bs';
import Card from '../../component/Card/Card'
import {
  ContainerMovie,
  Containerinfo,
  TitleH3,
  ContainerDesc,
} from './MovieStyle';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Movie() {
  const {id} = useParams();
  const [films, setFilms] = useState(null);

  const getmovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setFilms(data)
  }

  useEffect(() => {
    const filmUrl = `${moviesUrl}${id}?api_key=${apiKey}&language=pt-BR`;
    getmovie(filmUrl);
  }, []);

  const formated = (param) => {
    return param.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return(
    <ContainerMovie>
      {films && (
        <>
          <Card films={films} showLink={false}/>
          <p>{films.tagline}</p>
          <Containerinfo>
            <TitleH3>
              <BsWallet2 /> Orçamento:
            </TitleH3>
            <p>{formated(films.budget)}</p>
          </Containerinfo>
          <Containerinfo>
            <TitleH3>
              <BsGraphUp /> Receita:
            </TitleH3>
            <p>{formated(films.revenue)}</p>
          </Containerinfo>
          <Containerinfo>
            <TitleH3>
              <BsHourglassSplit /> Duração:
            </TitleH3>
            <p>{films.runtime}</p>
          </Containerinfo>
          <Containerinfo>
            <TitleH3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </TitleH3>
            <ContainerDesc>{films.overview}</ContainerDesc>
          </Containerinfo>
        </>
      )}
    </ContainerMovie>
  )
}