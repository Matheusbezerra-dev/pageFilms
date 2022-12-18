import { useEffect, useState, useCallback } from 'react';
import Loading from '../../component/Loading&NotFound/Loading';
import { useSearchParams } from 'react-router-dom';
import Card from '../../component/Card/Card';
import { QueryText, ContainerSeach, TitleSeach, ContainerFilms } from './SearchStyle';

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search() {
  const [searchParams] = useSearchParams();
  const [removeLoading, setRemoveLoading] = useState(false)

  const [topFilms, setTopFilms] = useState([]);
  const query = searchParams.get("q")

  const getSearch = useCallback(async (url) => {
    const response = await fetch(url);
    const data = await response.json();        
     setTopFilms(data.results);
    setRemoveLoading(true)  
  }, []);

  useEffect(() => {
    const searchQuery = `${searchUrl}?api_key=${apiKey}&query=${query}&language=pt-BR`
    setRemoveLoading(false)
    getSearch(searchQuery)
  },[query]);
  return (
    <>
      {!removeLoading ? (<Loading />)
        : (
          <ContainerSeach>
            <TitleSeach>Resultados para <QueryText>{query}</QueryText></TitleSeach>
            <ContainerFilms>
              {topFilms.length > 0 && topFilms.map((obj) => <Card key={obj.id} films={obj} />)}
            </ContainerFilms>
          </ContainerSeach>
        )
      }
    </>
  )
}
