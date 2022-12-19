import { useState, useEffect, useCallback, useContext } from 'react'; 
import { TitleHome, ContainerFilms, ContainerHome } from './HomeStyle';
import Card from '../../component/Card/Card';
import Loading from '../../component/Loading&NotFound/Loading';
import PageFilmsContext from '../../context/PageFilmsContext';

const moviesUrl = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

// const urlTodos = https://api.themoviedb.org/3/discover/movie?api_key=5074dabe0ba0adf010aa1408a9f1febf&language=pt-BR&page=2

export default function Home() {
  const {
    films,
    fetchFilms,
    removeLoading,
    setRemoveLoading,
  } = useContext(PageFilmsContext);
    
  useEffect(() => {
    const urlTopRated = `${moviesUrl}?api_key=${apiKey}&language=pt-BR&total_results`
    fetchFilms(urlTopRated)    
    setRemoveLoading(true)    
  },[]);

  return(
    <>
      {!removeLoading ? (<Loading />)      
        : (
          <ContainerHome>            
            <TitleHome>Lista de Filmes</TitleHome>
            <ContainerFilms>
              {films.length > 0 && films.map((obj) => <Card key={obj.id} films={obj} />)}
            </ContainerFilms>            
          </ContainerHome>  
        )
      }      
    </>
  );
}

Home.propTypes = {}.isRequired;
