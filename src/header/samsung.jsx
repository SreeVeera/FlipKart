import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Appbar from './appbar.jsx';
import { Card, CardContent, Typography, Grid, Box, Button } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import {useNavigate} from 'react-router-dom';
import { useCartStore } from '../store/cartStore.jsx';
import { useEffect } from 'react';

function Samsung() {
    return (
      <>
        <Appbar />
        <Samtwil />
      </>
    );
}

function Samtwil() {

    const addToCart = useCartStore((state) => state.addToCart);
    const cart = useCartStore((state) => state.cart);

    useEffect(() => {
        console.log("Cart update:", cart);
    }, [cart]);

    const Navigate = useNavigate();
    // Product details
    const product = {
        id: 1,
        name: "Samsung Galaxy F05 (Twilight Blue, 64 GB) (4 GB RAM)",
        price: 6499,
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=90&crop=false"
    };
    return (
        <Box sx={{ padding: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Card sx={{ display: 'flex', padding: 2 }}>
                <Box sx={{ dispaly: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                    <Box 
                        component="img"
                        src={product.image}
                        alt="Samsung Galaxy F05"
                        sx={{
                            width: 200,
                            height: 250,
                            objectFit: 'contain',
                            marginRight: 2, 
                            position: 'sticky', 
                            top: 50,
                            alignSelf: 'flex-start',
                            mb: 10
                        }}
                    />
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button 
                            variant="contained" 
                            startIcon={<ShoppingCartIcon />} 
                            sx={{ 
                                bgcolor: 'yellow', 
                                color: 'black', 
                                '&:hover': { bgcolor: '#f1c40f' } 
                            }} 
                            onClick={() => {
                                addToCart(product);
                                Navigate("/cart");
                            }} >
                                ADD TO CART
                        </Button>
                        <Button variant="contained" startIcon={<BoltIcon />} sx={{ bgcolor: 'orange', color: 'white', '&:hover': { bgcolor: '#e67e22' } }}>BUY NOW</Button>
                    </Box>
                </Box>
                <CardContent sx={{flex: 1}}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 400 }}>
                            Samsung Galaxy F05 (Twilight Blue, 64 GB) (4 GB RAM)
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <Box sx={{ bgcolor: '#388e3c', color: 'white', px: 0.7, borderRadius: 1, fontSize: 14, fontWeight: 600 }}>4.2 ★</Box>
                        <Typography variant="body2" color="text.secondary">
                            59,163 Ratings & 3,437 Reviews
                        </Typography>
                        <Box sx={{ color: '#1976d2', fontWeight: 600, fontSize: 15 }}>Assured</Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <Typography variant="body2" color="green">
                            Extra ₹3500 off
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>₹6,499</Typography>
                        <Box sx={{ color: '#878787', fontSize: 14, textDecoration: 'line-through' }}>₹9,999</Box>
                        <Box sx={{ color: '#388e3c', fontWeight: 600, fontSize: 14 }}>35% off</Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <Typography variant="body2" sx={{ lineHeight: 2 }}>
                            + ₹29 Protect Promise Fee <span style={{ color: '#1976d2', fontWeight: 500 }}>Learn more</span> 
                            <br />
                            Secure delivery by 27 Jul, Sunday
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, fontWeight: 600 }} >
                        Available Offers
                    </Box>
                    <Box sx={{ mt: 1 }}>
                        {[
                            {
                                title: 'Bank Offer',
                                text: '5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter',
                            },
                            {
                                title: 'Bank Offer',
                                text: '5% cashback on Axis Bank Flipkart Debit Card up to ₹750',
                            },
                            {
                                title: 'Bank Offer',
                                text: 'Flat ₹10 Instant Cashback on Paytm UPI Trxns. Min Order Value ₹500. Valid once per Paytm account',
                            },
                            {
                                title: 'Special Price',
                                text: 'Get extra ₹3500 off (price inclusive of cashback/coupon)',
                            },
                        ].map((offer, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'start', gap: 1.5, mb: 1 }}>
                                <LocalOfferIcon sx={{ color: 'green', mt: '2px', fontSize: 18 }} />
                                <Typography variant="body2" sx={{ fontSize: 15, lineHeight: 2, textAlign: 'left' }}>
                                    <span style={{ color: 'black', fontWeight: 550 }}>{offer.title}</span>{' '}
                                    {offer.text}{' '}
                                    <span style={{ color: '#1976d2', fontWeight: 500 }}>T&C</span>
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ width: '100%', textAlign: 'left', mt: 2 }}>
                        <FormControl sx={{ width: '100%' }}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="NoExchange"
                                name="radio-buttons-group"
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', wwidth: '100%' }}
                            >
                                <FormControlLabel 
                                    value="NoExchange" 
                                    control={<Radio />} 
                                    label={
                                        <Typography variant="body2" sx={{ fontSize: 15, lineHeight: 2 }}>
                                            Buy Without Exchange
                                        </Typography>
                                    } 
                                />
                                <FormControlLabel 
                                    value="Exchange" 
                                    control={<Radio />} 
                                    label={
                                        <Typography variant="body2" sx={{ fontSize: 15, lineHeight: 2 }}>
                                            Buy with Exchange
                                        </Typography>
                                    }
                                />
                            </RadioGroup>
                        </FormControl>
                    </Box>   
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <Box sx={{ bgcolor: 'white', color: '#00008B', px: 0.7, borderRadius: 1, fontSize: 14, fontWeight: 600, border: '1px solid #00008B' }}>SAMSUNG</Box>
                        <Typography variant="body2" >
                            1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories <span style={{ color: 'blue', fontWeight: 550 }}>Know More</span>{' '}
                        </Typography>
                    </Box> 
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
    );      
}

export default Samsung;