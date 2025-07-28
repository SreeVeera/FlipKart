import { Paper, Button } from '@mui/material';

export default function Item(props) {
    return (
        <Paper sx={{ padding: 2, textAlign: 'center' }}>
            <img
                className="carousel"
                src={props.item.image}
                alt="carousel"
                style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'cover'
                }}
            />
            <Button variant="contained" sx={{ mt: 2 }}>
                Check it out!
            </Button>
        </Paper>
    );
}
