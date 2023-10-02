import './App.css';
import TablaDatos from './components/TablaDatos';
import Buscador from './components/Buscador';
import { useState } from 'react';

const App = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const buscar = (termino) => {
    setTerminoBusqueda(termino);
  };

  return (
    <>
      <Buscador onBuscar={buscar} />
      <TablaDatos terminoBusqueda={terminoBusqueda} />
    </>
  );
};

export default App;
