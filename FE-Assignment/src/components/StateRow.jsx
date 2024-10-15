
import { Box, Typography, IconButton, Card, CardContent, FormControlLabel, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types'; // Import PropTypes

const StateRow = ({ provided, state, variants, onDeleteState, onAddVariant }) => {
  return (

    <Box
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      sx={{ 
        display: 'flex', 
        mb: 2, 
        backgroundColor: '#fff',
        '&:hover': { backgroundColor: '#f0f0f0' },
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <Box sx={{ width: '20%', p: 2 }}>
        <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center' }}>
          {state.name}
          <IconButton size="small" onClick={() => onDeleteState(state.id)} sx={{ ml: 1 }}>
            <DeleteIcon />
          </IconButton>
        </Typography>
      </Box>
      

      <Box sx={{ width: '20%', p: 2 }}>
        <Card variant="outlined" sx={{ backgroundColor: '#f0f4f8' }}>
          <CardContent>
            {state.filters.map((filter, filterIndex) => (
              <FormControlLabel
                key={filterIndex}
                control={<Checkbox />}
                label={filter}
              />
            ))}
          </CardContent>
        </Card>
      </Box>
      

      <Box sx={{ width: '60%', display: 'flex', overflowX: 'auto', alignItems: 'center' }}>
        {variants.map((variant, variantIndex) => (
          <Box key={variantIndex} sx={{ minWidth: 150, p: 1 }}>
            <Card 
              sx={{ 
                width: 120, 
                height: 80, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                cursor: 'pointer',
                backgroundColor: '#e8f4ff',
                '&:hover': {
                  backgroundColor: '#d0e8ff',
                },
              }}
              onClick={() => onAddVariant(state.id, variantIndex)} // Adding click functionality
            >
              <AddIcon sx={{ fontSize: 30, color: '#0066cc' }} />
            </Card>
          </Box>
        ))}
        <Box sx={{ minWidth: 150, p: 1 }}>
          <Card 
            sx={{ 
              width: 120, 
              height: 80, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              cursor: 'pointer',
              backgroundColor: '#e8f4ff',
              '&:hover': {
                backgroundColor: '#d0e8ff',
              },
            }}
            onClick={() => onAddVariant(state.id)} // Button to add a new variant
          >
            <AddIcon sx={{ fontSize: 30, color: '#0066cc' }} />
          </Card>

        </Box>
      </Box>
    </Box>
  );
};

// PropTypes validation
StateRow.propTypes = {
  provided: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  variants: PropTypes.array.isRequired,
  onDeleteState: PropTypes.func.isRequired,
  onAddVariant: PropTypes.func.isRequired, // Function to add a variant
};

export default StateRow;
