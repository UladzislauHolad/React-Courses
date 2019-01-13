import React, { FC, Fragment } from 'react';
import { Grid, Card, CardActions, Button, CardActionArea, CardContent, Typography, CardMedia } from '@material-ui/core';

const styles = {
    media: {
        height: 140,
    }
}

const NewsContent: FC = () => {
    return <Fragment>
        {[1, 2, 3, 4, 5, 1, 1, 11, 1, 1, 1, 1, 1, 1, , 1, 1].map((el) =>
            <Grid key={el} item xs={12} sm={6} md={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            style={styles.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
            </Typography>
                            <Typography component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
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
            </Grid>
        )}
    </Fragment>
}

export default NewsContent;