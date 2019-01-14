import React, { Component, ReactNode } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import SearchInput from './SearchInput';
import Filter from './SourceSelector';
import SortSelector from './SortSelector';
import NewsContent from './NewsContent';
import { sources } from '../collections/sources';
import { IArticle } from '../interfaces/IArticle';
import { connect } from 'react-redux';
import { SortDirections } from '../enums/sortDirections';
import { sortByDirection, filterByTerm } from '../helpers';
import { loadArticles } from '../actions';

interface IState {
    articles: {
        articles?: IArticle[];
        isLoading: boolean
    },
    sortDirection: SortDirections,
    searchTerm: string
}
interface IStateProps {
    articles?: IArticle[];
    isLoading: boolean;
    sortDirection: SortDirections;
}
interface IDispatchProps {
    loadArticles: () => void;
}

type IProps = IStateProps & IDispatchProps;

const styles = {
    progressRoot: {
        flexGrow: 1
    }
}

class NewsApp extends Component<IProps> {

    public componentDidMount() {
        this.props.loadArticles()
    }

    public render(): ReactNode {
        return <Grid container spacing={8}>
            <Grid item xs={12} sm={4}><SearchInput /></Grid>
            <Grid item xs={12} sm={4}><Filter sources={sources} /></Grid>
            <Grid item xs={12} sm={4}><SortSelector direction={this.props.sortDirection} /></Grid>
            <Grid container item spacing={8}>
                {this.props.isLoading
                    ? <div style={styles.progressRoot}>
                        <LinearProgress />
                    </div>
                    : <NewsContent articles={this.props.articles} />}
            </Grid>
        </Grid>
    }
}

const mapStateToProps = ({ articles, sortDirection, searchTerm }: IState): IStateProps => {
    return {
        articles: !!articles.articles
            ? sortByDirection(filterByTerm(articles.articles, searchTerm), sortDirection)
            : undefined,
        isLoading: articles.isLoading,
        sortDirection
    }
}

const mapDispatchToProps = { loadArticles: loadArticles };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsApp);