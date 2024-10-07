import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Card, CardActionArea, CardMedia, CardContent, Grid2 } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'; // Ensure the CSS file is imported

function Home() {
    const [products, setProducts] = useState([]);

    // Fetching products from the external API
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <>
            <Paper >
                <br />
                <Typography
                    variant="h5"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        fontWeight: 400,
                        marginBottom: 2,
                        marginTop:'70px',
                        '::before': {
                            content: '""',
                            flexGrow: 1,
                            marginRight: '16px',
                            borderBottom: '2px solid rgba(0, 0, 0, 0.5)',
                        },
                        '::after': {
                            content: '""',
                            flexGrow: 1,
                            marginLeft: '16px',
                            borderBottom: '2px solid rgba(0, 0, 0, 0.5)',
                        }
                    }}
                >
                    Product List
                </Typography>

                <Grid2 justifyContent="center" container spacing={5} sx={{ padding: 2 }}>
                    {products.map((data) => (
                        <Grid2 item xs={12} sm={6} md={4} key={data.id}>
                            <CardActionArea className='action1'>
                                <Card className="card" >
                                    <CardMedia
                                        component="img"
                                        className="card-media" // Apply the CSS class here
                                        image={data.image}
                                        alt={data.title}
                                        sx={{ objectFit: 'contain' }}

                                    />
                                    <CardContent className="card-content"> {/* Add this class for content padding */}
                                        <Typography component="div" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                                            {data.title}
                                        </Typography>
                                        <br />
                                        <br />
                                        <Typography variant="body2" color="text.secondary">
                                            Price: ${data.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Rating: {data.rating.rate}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Grid2>
                    ))}
                </Grid2>
            </Paper>
        </>
    );
}

export default Home;
