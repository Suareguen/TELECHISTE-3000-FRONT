import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { grey } from '@mui/material/colors';
import './JokeCard.css'

export default function JokeCard({ jokeValue }) {
  return (
    <Card className='card' sx={{ width: '345px', height: '200px', backgroundColor: grey[300] }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {jokeValue}
        </Typography>
      </CardContent>
      <CardActions>
        <FavoriteBorderIcon />
        <Typography>Add to Favorites</Typography>
      </CardActions>
    </Card>
  );
}
