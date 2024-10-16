import { Modal, Box, Typography, Grid, Button } from "@mui/material";
import PropTypes from "prop-types";
import "../../styles/ImageModal.css";

const ImageModal = ({ open, onClose, images, handleImageSelect }) => (
  <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "70vw",
        height: "65vh",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        overflowY: "auto",
      }}
    >
      <Typography id="modal-title" variant="h6" component="h2">
        Select Image
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {images.map((image, index) => (
          <Grid item xs={4} key={index}>
            <div className="modal-image-container">
              <img
                src={`images/${image.src}`}
                alt={`Image ${index + 1}`}
                className="image"
                onClick={() => handleImageSelect(`images/${image.src}`, image.description)}
              />
              <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
                {image.description}
              </Typography>
              <Button onClick={() => handleImageSelect(`images/${image.src}`, image.description)} variant="contained" fullWidth>
                Upload
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>
      <Button onClick={onClose} sx={{ mt: 2 }} variant="contained">
        Close
      </Button>
    </Box>
  </Modal>
);

// Define prop types for validation
ImageModal.propTypes = {
  open: PropTypes.bool.isRequired, // Ensures 'open' is a required boolean
  onClose: PropTypes.func.isRequired, // Ensures 'onClose' is a required function
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired, // Ensures 'src' is a string and required for each image
      description: PropTypes.string, // Optional description for each image
    })
  ).isRequired, // Ensures 'images' is a required array
  handleImageSelect: PropTypes.func.isRequired, // Ensures 'handleImageSelect' is a required function
};

export default ImageModal;
