import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import SearchInput from './SearchInput';
import Filter from './Filter';
import SortSelector from './SortSelector';
import NewsContent from './NewsContent';

const NewsApp: FC = () => {
    return <Grid container spacing={8}>
        <Grid item xs={12} sm={4}><SearchInput /></Grid>
        <Grid item xs={12} sm={4}><Filter /></Grid>
        <Grid item xs={12} sm={4}><SortSelector /></Grid>
        {/* <Grid container item spacing={8}><NewsContent /></Grid> */}
    </Grid>
}

export default NewsApp;