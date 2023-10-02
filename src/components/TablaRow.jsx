import PropTypes from 'prop-types';
import { FaEye, FaEdit } from 'react-icons/fa';

const TablaRow = ({ dato, index }) => {
  const styles = {
    backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff',
    borderBottom: '1px solid #ddd',
    padding: '8px',
  };

  return (
    <tr key={dato.login.uuid} style={styles}>
      <td>{dato.name.first}</td>
      <td>{dato.name.last}</td>
      <td>{dato.email}</td>
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
