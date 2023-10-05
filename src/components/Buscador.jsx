import { useState } from 'react';
import PropTypes from 'prop-types';

const Buscador = ({ onBuscar }) => {
  const [termino, setTermino] = useState('');

  const handleChange = event => {
    setTermino(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onBuscar(termino);
  };

  const styles = {
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
  };

  const inputStyles = {
    marginRight: '8px',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    flexGrow: 1,
  };

  const buttonStyles = {
    padding: '8px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={handleSubmit} style={styles}>
      <input
        type="text"
        placeholder="Buscar..."
        value={termino}
        onChange={handleChange}
        style={inputStyles}
      />
      <button type="submit" style={buttonStyles}>
        Buscar
      </button>
    </form>
  );
};

Buscador.propTypes = {
    onBuscar: PropTypes.func.isRequired,
};
export default Buscador;