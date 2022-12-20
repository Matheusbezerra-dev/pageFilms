import { useContext } from 'react';
import PageFilmsContext from '../../context/PageFilmsContext';
import { AiFillFastBackward, AiFillFastForward } from 'react-icons/ai';
import {
  ContainerPagination,
  ButtonPages,
  NumberPages,
} from './PaginationStyle';

export default function Pagination() {
  const {    
    fetchFilms,    
    page,
    setPage,    
    totalPage,    
    setRemoveLoading,
  } = useContext(PageFilmsContext);

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setRemoveLoading(false)
      fetchFilms();
      window.scrollTo(0, 0);
    }
  };

  const nextPage = () => {
    if (page < totalPage) {
      setPage(page + 1);
      setRemoveLoading(false)
      fetchFilms();
      window.scrollTo(0, 0);
    }
  };

  return (
    <ContainerPagination>
      <ButtonPages onClick={prevPage}><AiFillFastBackward /></ButtonPages>
      <NumberPages>{page}</NumberPages>  
      <ButtonPages onClick={nextPage}><AiFillFastForward /></ButtonPages>
    </ContainerPagination>
  );
};

Pagination.propTypes = {}.isRequired;
