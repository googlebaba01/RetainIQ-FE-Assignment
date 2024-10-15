import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Box, Button, Snackbar, Alert, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import StateTable from './components/StateTable';
import VariantHeader from './components/VariantHeader';

const App = () => {
  const [states, setStates] = useState([
    { id: '1', name: 'State 1', filters: ['Size', 'Color', 'Material'] },
    { id: '2', name: 'State 2', filters: ['Brand', 'Price', 'Rating'] },
  ]);
  const [variants, setVariants] = useState(['Variant 1', 'Variant 2', 'Variant 3', 'Variant 4']);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });

  const addState = () => {
    const newState = {
      id: String(Date.now()), // Use timestamp for unique ID
      name: `State ${states.length + 1}`,
      filters: ['New Filter 1', 'New Filter 2', 'New Filter 3'],
    };
    setStates([...states, newState]);
    showNotification('State added successfully', 'success');
  };

  const deleteState = (id) => {
    setStates(states.filter(state => state.id !== id));
    showNotification('State deleted successfully', 'success');
  };

  const addVariant = () => {
    setVariants([...variants, `Variant ${variants.length + 1}`]);
    showNotification('Variant added successfully', 'success');
  };

  const deleteVariant = (index) => {
    setVariants(variants.filter((_, i) => i !== index));
    showNotification('Variant deleted successfully', 'success');
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(states);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setStates(items);
  };

  const showNotification = (message, severity) => {
    setNotification({ open: true, message, severity });
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification({ ...notification, open: false });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Typography variant="h4" sx={{ mb: 3, color: 'black', textAlign: 'center' }}>
          Product Configuration Dashboard
        </Typography>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Box sx={{ width: '40%', mr: 2 }}>
            <Typography variant="h6" sx={{ color: 'black' }}>States</Typography>
          </Box>
          <Box sx={{ width: '60%', overflowX: 'auto' }}>
            <VariantHeader variants={variants} onDeleteVariant={deleteVariant} />
          </Box>
        </Box>
        <StateTable 
          states={states} 
          variants={variants} 
          onDeleteState={deleteState} 
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button 
            startIcon={<AddIcon />} 
            onClick={addState} 
            variant="contained" 
            sx={{ 
              backgroundColor: '#4caf50', 
              '&:hover': { backgroundColor: '#45a049' },
              color: 'black' // Set text color to black
            }}
          >
            Add State
          </Button>
          <Button 
            startIcon={<AddIcon />} 
            onClick={addVariant} 
            variant="contained"
            sx={{ 
              backgroundColor: '#2196f3', 
              '&:hover': { backgroundColor: '#1e88e5' },
              color: 'black' // Set text color to black
            }}
          >
            Add Variant
          </Button>
        </Box>
      </Box>
      <Snackbar 
        open={notification.open} 
        autoHideDuration={3000} 
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity} 
          sx={{ width: '100%', boxShadow: 3 }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </DragDropContext>
  );
};

export default App;
