import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom'
interface IMyProps {
  product: any
}

const MediaCard: React.FC<IMyProps> = (props: IMyProps) => {
  console.log("props:", props);
  return (
    <Card sx={{ maxWidth: 345, marginTop: 10 }}>
      <Link to={`/detail/${props.product.id}`}>
        <CardMedia
          component="img"
          height="300"
          image={props.product.img}
          alt={props.product.title}
        />

      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.product.details}

        </Typography>
      </CardContent>
      <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
          <Box ml='70px'>
            <Typography gutterBottom variant="h6" component="div">
              {props.product.price} rub
            </Typography>
          </Box>
      </CardActions>
    </Card>
  );
}
export default MediaCard