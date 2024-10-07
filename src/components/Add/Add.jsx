import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Add = (products) => {
  // State to handle product data
  const [product, setProduct] = useState({
    name: products.name || '', // Product name
    img: products.img || '',   // Product image URL or file path
    price: products.price || '', // Product price
    rating: products.rating || '' // Product rating
  });

  // State to handle form validation errors
  const [errors, setErrors] = useState({
    name: '',
    img: '',
    price: '',
    rating: ''
  });

  // Regex patterns
  const nameRegex = /^[A-Za-z\s]+$/;  // Only letters and spaces
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;  // URL format validation

  // Function to handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the product state with input changes
    setProduct({ ...product, [name]: value });

    // Clear the error message when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      submitProduct(); // Proceed if validation passes
    }
  };

  // Function to validate the form with regex
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate product name (only letters and spaces)
    if (!product.name) {
      newErrors.name = 'Product name is required';
      isValid = false;
    } else if (!nameRegex.test(product.name)) {
      newErrors.name = 'Product name can only contain letters and spaces';
      isValid = false;
    }

    // Validate image URL
    if (!product.img) {
      newErrors.img = 'Product image URL is required';
      isValid = false;
    } else if (!urlRegex.test(product.img)) {
      newErrors.img = 'Please enter a valid URL (e.g., http:// or https://)';
      isValid = false;
    }

    // Validate product price (must be a number)
    if (!product.price) {
      newErrors.price = 'Product price is required';
      isValid = false;
    } else if (isNaN(product.price)) {
      newErrors.price = 'Product price must be a number';
      isValid = false;
    }

    // Validate product rating (must be a number between 0 and 5)
    if (!product.rating) {
      newErrors.rating = 'Product rating is required';
      isValid = false;
    } else if (isNaN(product.rating) || product.rating < 0 || product.rating > 10) {
      newErrors.rating = 'Product rating must be a number between 0 and 10';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Placeholder function to send or log product data
  const submitProduct = () => {
    console.log('Product submitted:', product);
  };

  return (
    <>
      <br />
      <Card sx={{ minWidth: 475 }}>
        <CardContent sx={{ marginTop: '70px' }}>
          <h2>New Product</h2>
          <Box>
            {/* Input for Product Name */}
            <TextField
              onChange={handleChange}
              name="name"
              value={product.name}
              label="Product Name"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.name} // Show error state if validation fails
              helperText={errors.name} // Show error message
            />
            {/* Input for Image URL */}
            <TextField
              onChange={handleChange}
              name="img"
              value={product.img}
              label="Image URL"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.img}
              helperText={errors.img}
            />
            {/* Input for Product Price */}
            <TextField
              onChange={handleChange}
              name="price"
              value={product.price}
              label="Price"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.price}
              helperText={errors.price}
            />
            {/* Input for Product Rating */}
            <TextField
              onChange={handleChange}
              name="rating"
              value={product.rating}
              label="Rating (0-5)"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.rating}
              helperText={errors.rating}
            />
            <br />
            {/* Submit Button */}
            <Button variant="contained" onClick={handleSubmit}>
              ADD
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Add;
