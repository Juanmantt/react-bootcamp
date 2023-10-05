import PropTypes from 'prop-types';
import { FaEye, FaEdit } from 'react-icons/fa';
import { ModoOscuroContext } from '../layaut/Layaut';
import { useContext } from 'react';

const TablaRow = ({ dato }) => {
    const modoOscuro = useContext(ModoOscuroContext);
    //

  return (
    //si modo oscuro es true, agrega la clase modo-oscuro
    <tr key={dato.login.uuid} className={modoOscuro ? 'modo-oscuro' : ''}>
      <td>{dato.name.first}</td>
      <td>{dato.name.last}</td>
      <td>{dato.email}</td>
      <td>{dato.dob.age}</td>
      <td>
        <button>
          <FaEye />
        </button>
      </td>
      <td>
        <button>
          <FaEdit />
        </button>
      </td>
    </tr>
  );
};

TablaRow.propTypes = {
  dato: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default TablaRow;