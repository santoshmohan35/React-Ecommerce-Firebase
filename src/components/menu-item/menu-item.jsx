import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
    <Card className="col-md-3 mt-3" onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <CardActionArea>
            <CardMedia className="media"
                image={imageUrl}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Share
      </Button>
            <Button size="small" color="primary">
                Learn More
      </Button>
        </CardActions>
    </Card>
)

export default withRouter(MenuItem);