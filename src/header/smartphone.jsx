import Appbar from './appbar.jsx';
import { Card, CardContent, CardMedia, Typography, Grid, Checkbox, Box, Button } from '@mui/material';

function Sphonepage() {
  return (
    <>
      <Appbar />
      <Smartphones />
    </>
  );
}

function Smartphones() {
  return (
    <Box sx={{ padding: 3, marginTop: 5 }}>
      <Grid container spacing={3}>
        {/* First Smartphone */}
        <Grid item xs={12} sx={{ width: '100%' }}>
          <Card sx={{ display: 'flex', alignItems: 'flex-start', padding: 2 }}>
            <CardMedia
              component="img"
              image="https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=90&crop=false"
              alt="Samsung Galaxy F05"
              sx={{ width: 120, height: 160, objectFit: 'contain', marginRight: 2 }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ bgcolor: '#388e3c', color: 'white', px: 1, py: 0.2, borderRadius: 1, fontSize: 12, fontWeight: 600 }}>Bestseller</Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Samsung Galaxy F05 (Twilight Blue, 64 GB)
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                <Box sx={{ bgcolor: '#388e3c', color: 'white', px: 0.7, borderRadius: 1, fontSize: 14, fontWeight: 600 }}>4.2 ★</Box>
                <Typography variant="body2" color="text.secondary">
                  59,163 Ratings & 3,437 Reviews
                </Typography>
              </Box>
              <ul style={{ margin: '8px 0', paddingLeft: 18, fontSize: 15, textAlign: 'left', listStylePosition: 'inside' }}>
                <li style={{ textAlign: 'left' }}>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</li>
                <li style={{ textAlign: 'left' }}>17.12 cm (6.74 inch) HD+ Display</li>
                <li style={{ textAlign: 'left' }}>50MP + 2MP | 8MP Front Camera</li>
                <li style={{ textAlign: 'left' }}>5000 mAh Battery</li>
                <li style={{ textAlign: 'left' }}>Helio G85 Processor</li>
                <li style={{ textAlign: 'left' }}>1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories</li>
              </ul>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                <Checkbox />
                <Typography variant="body2">Add to Compare</Typography>
              </Box>
            </CardContent>
            <Box sx={{ minWidth: 180, textAlign: 'right', mt: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>₹6,499</Typography>
              <Box sx={{ color: '#878787', fontSize: 14, textDecoration: 'line-through' }}>₹9,999</Box>
              <Box sx={{ color: '#388e3c', fontWeight: 600, fontSize: 14 }}>35% off</Box>
              <Box sx={{ fontSize: 14, mt: 1 }}>Upto <b>₹5,250</b> Off on Exchange</Box>
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
              image="https://rukminim2.flixcart.com/image/750/900/xif0q/mobile/u/c/i/-original-imahawgayvnqkzaz.jpeg?q=20&crop=false"
              alt="POCO C71"
              sx={{ width: 120, height: 160, objectFit: 'contain', marginRight: 2 }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ bgcolor: '#388e3c', color: 'white', px: 1, py: 0.2, borderRadius: 1, fontSize: 12, fontWeight: 600 }}>Bestseller</Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  POCO C71(Desert Gold, 128 GB)
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                <Box sx={{ bgcolor: '#388e3c', color: 'white', px: 0.7, borderRadius: 1, fontSize: 14, fontWeight: 600 }}>4.1 ★</Box>
                <Typography variant="body2" color="text.secondary">
                  7,939 Ratings & 448 Reviews
                </Typography>
              </Box>
              <ul style={{ margin: '8px 0', paddingLeft: 18, fontSize: 15, textAlign: 'left', listStylePosition: 'inside' }}>
                <li style={{ textAlign: 'left' }}>6 GB RAM | 128 GB ROM | Expandable Upto 2 TB</li>
                <li style={{ textAlign: 'left' }}>17.48 cm (6.88 inch) HD+ Display</li>
                <li style={{ textAlign: 'left' }}>32MP Rear Camera | 8MP Front Camera</li>
                <li style={{ textAlign: 'left' }}>5200 mAh Battery</li>
                <li style={{ textAlign: 'left' }}>Unisoc T7250 Max clock speed: 2 x A75@1.8GHz 6 x A55@1.6GHz Processor</li>
                <li style={{ textAlign: 'left' }}>1 Year Manufacturer Warranty for Phone and 6 Months for In the Box Accessories</li>
              </ul>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                <Checkbox />
                <Typography variant="body2">Add to Compare</Typography>
              </Box>
            </CardContent>
            <Box sx={{ minWidth: 180, textAlign: 'right', mt: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>₹6,999</Typography>
              <Box sx={{ color: '#878787', fontSize: 14, textDecoration: 'line-through' }}>₹9,999</Box>
              <Box sx={{ color: '#388e3c', fontWeight: 600, fontSize: 14 }}>30% off</Box>
              <Box sx={{ fontSize: 14, mt: 1 }}>Upto <b>₹5,650</b> Off on Exchange</Box>
              <Box sx={{ color: '#388e3c', fontWeight: 600, fontSize: 15 }}>Bank Offer</Box>
              <Box sx={{ color: '#1976d2', fontWeight: 600, fontSize: 15, mt: 1 }}>Assured</Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Sphonepage;