import PropTypes from "prop-types";
import StateRow from "./StateRow";

export default function TableBody({ states, moveState, handleOpenModal, handleDeleteState }) {
  return (
    <tbody>
      {states.map((state, index) => (
        <StateRow
          key={state.id}
          state={state}
          index={index}
          moveState={moveState}
          handleOpenModal={handleOpenModal}
          handleDeleteState={handleDeleteState}
        />
      ))}
    </tbody>
  );
}

// Adding PropTypes validation
TableBody.propTypes = {
  states: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      variants: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          image: PropTypes.string,
          description: PropTypes.string,
          filters: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              value: PropTypes.string.isRequired,
            })
          ),
        })
      ).isRequired,
    })
  ).isRequired,
  moveState: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleDeleteState: PropTypes.func.isRequired,
};
