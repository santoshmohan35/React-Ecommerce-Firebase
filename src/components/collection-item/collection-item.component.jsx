import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <Card className="col-md-3 mt-3">
        <CardActionArea>
            <CardMedia className="media"
                image={imageUrl}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="h2">
                    &#x20B9;{price}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className="justify-content-center">
            <Button style={{backgroundColor:'#CF7ADF'}} size="small" variant="contained" endIcon={<Icon>shopping_cart</Icon>} color="primary">Add to Cart</Button>
        </CardActions>
    </Card>
)

export default CollectionItem;