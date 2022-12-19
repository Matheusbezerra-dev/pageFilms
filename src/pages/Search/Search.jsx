import { useEffect, useState, useCallback, useContext } from 'react';
import Loading from '../../component/Loading&NotFound/Loading';
import { useSearchParams } from 'react-router-dom';
import Card from '../../component/Card/Card';
import { QueryText, ContainerSeach, TitleSeach, ContainerFilms } from './SearchStyle';
import PageFilmsContext from '../../context/PageFilmsContext';

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search() {
  const {
    films,
    fetchFilms,
    removeLoading,
    setRemoveLoading,
  } = useContext(PageFilmsContext);
  const [searchParams] = useSearchParams();
  
  const query = searchParams.get("q")     
    
  useEffect(() => {
      const searchQuery = `${searchUrl}?api_key=${apiKey}&query=${query}&language=pt-BR&`
    setRemoveLoading(false)
    fetchFilms(searchQuery)
    setRemoveLoading(true)
  },[query]);
  
  return (
    <>
      {!removeLoading ? (<Loading />)
        : (
          <ContainerSeach>
            <TitleSeach>Resultados para <QueryText>{query}</QueryText></TitleSeach>
            <ContainerFilms>
              {films.length > 0 && films.map((obj) => <Card key={obj.id} films={obj} />)}
            </ContainerFilms>
          </ContainerSeach>
        )
      }
    </>
  )
}
