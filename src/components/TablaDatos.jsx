import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TablaRow from './TablaRow';

const TablaDatos = ({ terminoBusqueda }) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      let pagina = 1;
      let resultados = [];
      while (resultados.length < 100) {
        let respuesta = await fetch(
          `https://randomuser.me/api/?page=${pagina}&results=20&seed=abc`
        );
        let datosPagina = await respuesta.json();
        resultados = [...resultados, ...datosPagina.results];
        pagina++;
      }
      setDatos(resultados);
    };

    obtenerDatos();
  }, []);

  const datosFiltrados = terminoBusqueda
    ? datos.filter(
        (dato) =>
          dato.name.first
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase()) ||
          dato.name.last
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase()) ||
          dato.email.toLowerCase().includes(terminoBusqueda.toLowerCase())
      )
    : datos;

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo electrónico</th>
        </tr>
      </thead>
      <tbody>
        {datosFiltrados.map((dato, index) => (
          <TablaRow key={dato.login.uuid} dato={dato} index={index} />
        ))}
      </tbody>
    </table>
  );
};

TablaDatos.propTypes = {
  terminoBusqueda: PropTypes.string.isRequired,
};
export default TablaDatos;
