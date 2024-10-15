import PropTypes from 'prop-types'; // Import PropTypes
import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const VariantHeader = ({ variants, onDeleteVariant }) => {
  return (
    <Box sx={{ display: 'flex', minWidth: 'max-content' }}>
      {variants.map((variant, index) => (
        <Box key={index} sx={{ minWidth: 150, p: 1 }}>
          <Typography color='black' variant="subtitle1">
            {variant}
            <IconButton size="small" onClick={() => onDeleteVariant(index)}>
              <DeleteIcon />
            </IconButton>
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

// PropTypes validation
VariantHeader.propTypes = {
  variants: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of strings
  onDeleteVariant: PropTypes.func.isRequired, // Function to delete a variant
};

export default VariantHeader;
