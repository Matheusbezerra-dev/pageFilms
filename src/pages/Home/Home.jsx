import { useState, useEffect, useCallback } from 'react'; 
import { TitleHome, ContainerFilms, ContainerHome } from './HomeStyle';
import Card from '../../component/Card/Card';
import Loading from '../../component/Loading&NotFound/Loading';

const moviesUrl = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

// const urlTodos = https://api.themoviedb.org/3/discover/movie?api_key=5074dabe0ba0adf010aa1408a9f1febf&language=pt-BR&page=2

export default function Home() {
  const [topFilms, setTopFilms] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false)
  
  const getFilms = useCallback(async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setTimeout( () => {
    setTopFilms(data.results);
    setRemoveLoading(true)

    }, 1000)
  }, []);

  useEffect(() => {
    const urlTopRated = `${moviesUrl}?api_key=${apiKey}&language=pt-BR`
    getFilms(urlTopRated)
  },[]);
  
  return(
    <>
      {!removeLoading ? (<Loading />)      
        : (
          <ContainerHome>            
            <TitleHome>Lista de Filmes:</TitleHome>
            <ContainerFilms>
              {topFilms.length > 0 && topFilms.map((obj) => <Card key={obj.id} films={obj} />)}
            </ContainerFilms>            
          </ContainerHome>  
        )
      }      
    </>
  );
}