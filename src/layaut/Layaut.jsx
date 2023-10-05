import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import '../App.css';

// Creamos un contexto para el modo oscuro
export const ModoOscuroContext = createContext(false);

const Layout = ({ children }) => {
  const [modoOscuro, setModoOscuro] = useState(false);

  const handleModoOscuro = (event) => {
    setModoOscuro(event.target.checked);
    console.log(modoOscuro);
  };

  return (
    // Utilizamos el proveedor del contexto para pasar el estado del modo oscuro
    <ModoOscuroContext.Provider value={modoOscuro}>
      <div className="container">
        <header className="header">
          <h1>App bootcamp</h1>
          <label>
            <input
              type="checkbox"
              className="modo-oscuro"
              checked={modoOscuro}
              onChange={handleModoOscuro}
            />
            Modo oscuro
          </label>
        </header>
        <main className={modoOscuro ? 'content modo-oscuro' : 'content'}>
          {children}
        </main>
      </div>
    </ModoOscuroContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
