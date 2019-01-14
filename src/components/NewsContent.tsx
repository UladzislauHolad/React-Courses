import React, { FC, Fragment } from 'react';
import { Grid, Card, CardActions, Button, CardActionArea, CardContent, Typography, CardMedia } from '@material-ui/core';
import { IArticle } from '../interfaces/IArticle';

interface IProps {
    articles?: IArticle[]
}

const styles = {
    media: {
        height: 140,
    }
}

const NewsContent: FC<IProps> = (props) => {
    const { articles } = props;
    return <Fragment>
        {!!articles ? articles.map((article) =>
            <Grid key={article.url} item xs={12} sm={6} md={4}>
                <Card>
                    <CardActionArea onClick={() => window.open(article.url, "_blank")}>
                        <CardMedia
                            style={styles.media}
                            image={article.urlToImage}
                            title={article.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {article.title}
                            </Typography>
                            <Typography component="p">
                                {article.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    : <Typography variant="h5"><em>No matches</em></Typography>}
    </Fragment>
}

export default NewsContent;