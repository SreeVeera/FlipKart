import { Paper, Button } from '@mui/material'
export default function Item(props)
{
    return (
        <Paper className="paper">
             <img className="carousel" src={props.item.image} alt="carousel" width="100%" height="100px" />
<div className="button">
            <Button className="check" variant="contained" >
                Check it out!
            </Button>
            </div>
        </Paper>
    );
}
