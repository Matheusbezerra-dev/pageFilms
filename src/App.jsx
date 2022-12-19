import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import PageFilmsProvider from './context/PageFilmsProvider';

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <ContainerApp>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ContainerApp>
  );
}
