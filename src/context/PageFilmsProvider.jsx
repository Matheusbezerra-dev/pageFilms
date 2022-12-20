import { useState, useEffect, useCallback, useMemo } from 'react';
import PageFilmsContext from './PageFilmsContext';

const moviesUrl = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

export default function PageFilmsProvider({children}) {
  const [films, setFilms] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [page, setPage] =  useState(1);
  const [totalPage, setTotalPage] = useState(null);


  const fetchFilms = useCallback(async (url) => {
    const response = await fetch(url);
    const data = await response.json(); 
    console.log(data);
    const { results, total_pages} = data
    setFilms(results);
    setTotalPage(total_pages)
  }, []);

  const filmsContext = useMemo( () => ({
    films,
    fetchFilms,
    removeLoading,
    setRemoveLoading,
    page,
    setPage,
    totalPage,
    setTotalPage,
  }), [
    films,
    fetchFilms,
    removeLoading,
    setRemoveLoading,
    page,
    setPage,
    totalPage,
    setTotalPage,
  ]);

  return (
    <div>
      <PageFilmsContext.Provider value={ filmsContext }>
        {children}
      </PageFilmsContext.Provider>
    </div>
  );
}

PageFilmsProvider.propTypes = {}.isRequired;
