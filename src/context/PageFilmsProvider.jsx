import { useState, useEffect, useCallback, useMemo } from 'react';
import PageFilmsContext from './PageFilmsContext';

const moviesUrl = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_API_KEY;

export default function PageFilmsProvider({children}) {
  const [films, setFilms] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [itensPage, setItensPage] = useState(20);
  const [currentPage, setCurrentPage] =  useState(0);
  

  const fetchFilms = useCallback(async (url) => {
    const response = await fetch(url);
    const data = await response.json(); 
    console.log(data);
    const { results, total_pages, total_results} = data
    setFilms(results);
  }, []);

  const filmsContext = useMemo( () => ({
    films,
    fetchFilms,
    removeLoading,
    setRemoveLoading,
  }), [
    films,
    fetchFilms,
    removeLoading,
    setRemoveLoading,
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
