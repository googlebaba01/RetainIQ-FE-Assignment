import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Paper } from '@mui/material';
import StateRow from './StateRow';
import PropTypes from 'prop-types';

const StateTable = ({ states, variants, onDeleteState }) => {
  return (
    <Paper sx={{ overflowX: 'auto' }}>
      <Droppable droppableId="states">
        {(provided) => (
          <Box {...provided.droppableProps} ref={provided.innerRef}>
            {states.map((state, index) => (
              <Draggable key={state.id} draggableId={state.id} index={index}>
                {(provided) => (
                  <StateRow
                    provided={provided}
                    state={state}
                    variants={variants}
                    onDeleteState={onDeleteState}
                  />
                
                )}
              </Draggable>
        
            ))}
            {provided.placeholder}
            <div>Hello</div>
          </Box>
        )}
      </Droppable>
    </Paper>
  );
};

// Define PropTypes for the StateTable component
StateTable.propTypes = {
  states: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired, // Adjust based on your state structure
      filters: PropTypes.arrayOf(PropTypes.string), // Adjust based on your state structure
    })
  ).isRequired,
  variants: PropTypes.arrayOf(PropTypes.string).isRequired, // Adjust based on your variant structure
  onDeleteState: PropTypes.func.isRequired,
};

export default StateTable;
