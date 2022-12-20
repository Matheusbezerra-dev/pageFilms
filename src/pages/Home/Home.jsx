import { useState, useEffect, useCallback, useContext } from 'react'; 
import { TitleHome, ContainerFilms, ContainerHome } from './HomeStyle';
import Card from '../../component/Card/Card';
import Loading from '../../component/Loading&NotFound/Loading';
import PageFilmsContext from '../../context/PageFilmsContext';
import Pagination from '../../component/Pagination/Pagination';

const moviesUrl = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

// const urlTodos = https://api.themoviedb.org/3/discover/movie?api_key=5074dabe0ba0adf010aa1408a9f1febf&language=pt-BR&page=2

export default function Home() {
  const {
    films,
    fetchFilms,
    removeLoading,
    setRemoveLoading,
    page,
    totalPage
  } = useContext(PageFilmsContext);
    
  useEffect(() => {
    const urlTopRated = `${moviesUrl}?api_key=${apiKey}&language=pt-BR&total_results&page=${page}`
    setRemoveLoading(false)
    fetchFilms(urlTopRated)    
    setRemoveLoading(true)    
  },[fetchFilms, page]);

  return(
    <>
      {!removeLoading ? (<Loading />)      
        : (
          <ContainerHome>            
            <TitleHome>Lista de Filmes</TitleHome>
            <ContainerFilms>
              {films.length > 0 && films.map((obj) => <Card key={obj.id} films={obj} />)}
            </ContainerFilms>
            {totalPage > 1 && <Pagination />}         
          </ContainerHome>  
        )
      }      
    </>
  );
}

Home.propTypes = {}.isRequired;
