import { useState } from 'react';
import Layout from './layaut/Layaut';
import TablaDatos from './components/TablaDatos';
import Buscador from './components/Buscador';

const App = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const buscar = termino => {
    setTerminoBusqueda(termino);
  };

  return (
    <Layout>
      <Buscador onBuscar={buscar} />
      <TablaDatos terminoBusqueda={terminoBusqueda} />
    </Layout>
  );
};

export default App;
