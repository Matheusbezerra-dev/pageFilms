import { Outlet } from 'react-router-dom';
import Header from './component/Header/Header';

export default function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>  
  );
}
