import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Login />
      <Footer />
      <Outlet /> {/* Renderiza as páginas adicionais (ex.: LoginPage) */}
    </>
  );
}

export default App;