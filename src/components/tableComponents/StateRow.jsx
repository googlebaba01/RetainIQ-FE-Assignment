import { useDrag, useDrop } from "react-dnd";
import { FaTrashAlt, FaEdit, FaPlus } from "react-icons/fa";
import AppsIcon from "@mui/icons-material/Apps";
import PropTypes from "prop-types";

export default function StateRow({ 
  state, 
  index, 
  moveState, 
  handleOpenModal, 
  handleDeleteState, 
  handleAddVariant 
}) {
  const [, ref] = useDrop({
    accept: "state",
    hover(item) {
      if (item.index !== index) {
        moveState(item.index, index);
        item.index = index;
      }
    },
  });

  const [, drag] = useDrag({
    type: "state",
    item: { id: state.id, index },
  });

  return (
    <tr ref={(node) => drag(ref(node))} key={state.id}>
      <td className="header-cell stateNumber">
        <div className="buttonClass">
          <button onClick={() => handleDeleteState(state.id)} className="delete-btn">
            <FaTrashAlt className="delete-icon" />
          </button>
        </div>
        <div className="stateId">{state.id}</div>
        <AppsIcon />
      </td>
      <td className="header-cell stateName">
        {/* Handle Filters display */}
      </td>
      {state.variants.map((variant) => (
        <td key={variant.id} className="table-data">
          {variant.image ? (
            <div className="image-container">
              <img src={variant.image} alt={variant.name} className="image" />
              <button onClick={() => handleOpenModal(state.id, variant.id)} className="edit-image-btn">
                <FaEdit />
              </button>
            </div>
          ) : (
            <div className="emptyImage">
              <button onClick={() => handleOpenModal(state.id, variant.id)} className="upload-image-btn">
                <FaPlus className="addFilterIcon" /> Add design
              </button>
            </div>
          )}
        </td>
      ))}
      <td className="header-cell">
        <button onClick={() => handleAddVariant(state.id)} className="add-variant-btn">
          <FaPlus className="add-variant-icon" />
        </button>
      </td>
    </tr>
  );
}

// Prop Types Validation
StateRow.propTypes = {
  state: PropTypes.shape({
    id: PropTypes.string.isRequired,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  moveState: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleDeleteState: PropTypes.func.isRequired,
  handleAddVariant: PropTypes.func.isRequired,
};
