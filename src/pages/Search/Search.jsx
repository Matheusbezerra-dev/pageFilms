import { useEffect, useState, useCallback, useContext } from 'react';
import Loading from '../../component/Loading&NotFound/Loading';
import { useSearchParams } from 'react-router-dom';
import Card from '../../component/Card/Card';
import { QueryText, ContainerSeach, TitleSeach, ContainerFilms } from './SearchStyle';
import PageFilmsContext from '../../context/PageFilmsContext';
import Pagination from '../../component/Pagination/Pagination';

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search() {
  const {
    films,
    fetchFilms,
    removeLoading,
    setRemoveLoading,
    totalPage,
    page,
    setPage,
  } = useContext(PageFilmsContext);
  const [searchParams] = useSearchParams();
  
  const query = searchParams.get("q")     
    
  useEffect(() => {
      const searchQuery = `${searchUrl}?api_key=${apiKey}&query=${query}&language=pt-BR&page=${page}`
    setRemoveLoading(false)
    fetchFilms(searchQuery)
    setRemoveLoading(true)
  },[query,page,fetchFilms]);
  
  return (
    <>
      {!removeLoading ? (<Loading />)
        : (
          <ContainerSeach>
            <TitleSeach>Resultados para <QueryText>{query}</QueryText></TitleSeach>
            <ContainerFilms>
              {films.length > 0 && films.map((obj) => <Card key={obj.id} films={obj} />)}
            </ContainerFilms>
            {totalPage > 1 && <Pagination />}  
          </ContainerSeach>
        )
      }
    </>
  )
}
