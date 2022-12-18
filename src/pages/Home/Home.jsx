import { useState, useEffect, useCallback } from 'react'; 
import Card from '../../component/Card/Card';

const moviesUrl = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

// const urlTodos = https://api.themoviedb.org/3/discover/movie?api_key=5074dabe0ba0adf010aa1408a9f1febf&language=pt-BR&page=2

export default function Home() {
  const [topFilms, setTopFilms] = useState([]);
  
  const getFilms = useCallback(async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setTopFilms(data.results);
  }, []);

  useEffect(() => {
    const urlTopRated = `${moviesUrl}?api_key=${apiKey}&language=pt-BR`
    getFilms(urlTopRated)
  },[]);
  console.log(topFilms)
  return(
    <>
      <div>
        <h2>Lista de Filmes:</h2>
        <div>
          {topFilms.length === 0 && <p>Carregando...</p>}
          {topFilms.length > 0 && topFilms.map((obj) => <Card key={obj.id} films={obj} />)}
        </div>
      </div>
    </>
  );
}