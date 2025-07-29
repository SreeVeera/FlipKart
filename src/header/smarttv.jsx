import Appbar from './appbar.jsx';
import { Card, CardContent, CardMedia, Typography, Grid, Checkbox, Box, Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';

function Stvpage() {
  return (
    <>
      <Appbar />
      <Smarttvs />
    </>
  );
}

function Smarttvs() {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: 3, marginTop: 5 }}>
      <Grid container spacing={3}>
        {/* First SmartTV */}
        <Grid item xs={12} sx={{ width: '100%' }} >
          <Card sx={{ display: 'flex', alignItems: 'flex-start', padding: 2 }} onClick={() => navigate("/xiaomi")} >
            <CardMedia
              component="img"
              image="https://rukminim2.flixcart.com/image/312/312/xif0q/television/w/m/j/-original-imahe3hywmcyx4bp.jpeg?q=70"
              alt="XIAOMI G Series"
              sx={{ width: 120, height: 160, objectFit: 'contain', marginRight: 2 }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ bgcolor: '#388e3c', color: 'white', px: 1, py: 0.2, borderRadius: 1, fontSize: 12, fontWeight: 600 }}>Bestseller</Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                XIAOMI G Series 80 cm (32 inch) QLED HD Ready Smart Google TV 2025 Edition with Dolby Audio| Wide Colour Gamut |Bezel-less Design | Google Assistant  (L32MB-APIN)
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                <Box sx={{ bgcolor: '#388e3c', color: 'white', px: 0.7, borderRadius: 1, fontSize: 14, fontWeight: 600 }}>4 ★</Box>
                <Typography variant="body2" color="text.secondary">
                  2546 Ratings & 185 Reviews
                </Typography>
              </Box>
              <ul style={{ margin: '8px 0', paddingLeft: 18, fontSize: 15, textAlign: 'left', listStylePosition: 'inside' }}>
                <li style={{ textAlign: 'left' }}>Operating System: Google TV</li>
                <li style={{ textAlign: 'left' }}>HD Ready 1366 x 768 Pixels</li>
                <li style={{ textAlign: 'left' }}>Launch Year: 2025</li>
                <li style={{ textAlign: 'left' }}>1 year comprehensive warranty on product and 1 year additional on Panel provided by the brand from the date of purchase</li>
              </ul>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                <Checkbox />
                <Typography variant="body2">Add to Compare</Typography>
              </Box>
            </CardContent>
            <Box sx={{ minWidth: 180, textAlign: 'right', mt: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>₹13,999</Typography>
              <Box sx={{ color: '#878787', fontSize: 14, textDecoration: 'line-through' }}>₹26,999</Box>
              <Box sx={{ color: '#388e3c', fontWeight: 600, fontSize: 14 }}>48% off</Box>
              <Box sx={{ fontSize: 14, mt: 1 }}>Upto <b>₹2,000</b> Off on Exchange</Box>
              <Box sx={{ color: '#388e3c', fontWeight: 600, fontSize: 15 }}>Bank Offer</Box>
              <Box sx={{ color: '#1976d2', fontWeight: 600, fontSize: 15, mt: 1 }}>Assured</Box>
            </Box>
          </Card>
        </Grid>

        {/* Second Smartphone */}
        <Grid item xs={12} sx={{ width: '100%' }}>
          <Card sx={{ display: 'flex', alignItems: 'flex-start', padding: 2 }}>
            <CardMedia
              component="img"
              image="https://rukminim2.flixcart.com/image/312/312/xif0q/television/m/o/5/-original-imagy65rwb2sgnvh.jpeg?q=70"
              alt="Panasonic"
              sx={{ width: 120, height: 160, objectFit: 'contain', marginRight: 2 }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ bgcolor: '#388e3c', color: 'white', px: 1, py: 0.2, borderRadius: 1, fontSize: 12, fontWeight: 600 }}>Bestseller</Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Panasonic 80 cm (32 inch) HD Ready LED Smart Google TV  (TH-32MS660DX)
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                <Box sx={{ bgcolor: '#388e3c', color: 'white', px: 0.7, borderRadius: 1, fontSize: 14, fontWeight: 600 }}>4.2 ★</Box>
                <Typography variant="body2" color="text.secondary">
                  3,188 Ratings & 542 Reviews
                </Typography>
              </Box>
              <ul style={{ margin: '8px 0', paddingLeft: 18, fontSize: 15, textAlign: 'left', listStylePosition: 'inside' }}>
                <li style={{ textAlign: 'left' }}>Operating System: Google TV</li>
                <li style={{ textAlign: 'left' }}>HD Ready 1366 x 768 Pixels</li>
                <li style={{ textAlign: 'left' }}>Launch Year: 2023</li>
                <li style={{ textAlign: 'left' }}>1 Year Warranty on Product</li>
              </ul>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                <Checkbox />
                <Typography variant="body2">Add to Compare</Typography>
              </Box>
            </CardContent>
            <Box sx={{ minWidth: 180, textAlign: 'right', mt: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>₹15,490</Typography>
              <Box sx={{ color: '#878787', fontSize: 14, textDecoration: 'line-through' }}>₹20,990</Box>
              <Box sx={{ color: '#388e3c', fontWeight: 600, fontSize: 14 }}>26% off</Box>
              <Box sx={{ fontSize: 14, mt: 1 }}>Upto <b>₹2,000</b> Off on Exchange</Box>
              <Box sx={{ color: '#388e3c', fontWeight: 600, fontSize: 15 }}>Bank Offer</Box>
              <Box sx={{ color: '#1976d2', fontWeight: 600, fontSize: 15, mt: 1 }}>Assured</Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Stvpage;