import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PageFilmsProvider from './context/PageFilmsProvider';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import Search from './pages/Search/Search';
import Global from './style/Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageFilmsProvider>
        <Global />
        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='movie/:id' element={<Movie />} />
            <Route path='search' element={<Search />} />
          </Route>
        </Routes>
      </PageFilmsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
