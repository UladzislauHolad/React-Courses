import React from 'react';
import Articles from '../Articles';
import TabControl from './TabControl';
import * as ArticleService from '../../services/articlesService';
import Loader from '../Loader';


class Tab extends React.Component {
    state = {
        articles: [],
        loading: false
    }

    getArticles = (query) => {
        this.setState({
            loading: true
        });
        this.changeActiveBtnState(query)
        ArticleService.getArticles(query).then(data => {
            this.setState({
                articles: data.articles,
                loading: false
            });
        });
    }

    changeActiveBtnState(query) {
        const newActiveBtn = this.props.buttons.find(x => x.query === query);

        if(newActiveBtn && this.isActiveBtnChanged(newActiveBtn)) {
            this.deactiveCurrent();

            newActiveBtn.isActive = true;
            this.setState({
                activeBtn: newActiveBtn
            });
        }
    }

    deactiveCurrent() {
        if(this.state.activeBtn) {
            const currentActiveBtn = this.props.buttons.find(x => 
                x.query === this.state.activeBtn.query);
            
            currentActiveBtn.isActive = false; 
        }
    }
    
    isActiveBtnChanged(newActiveBtn) {
        const currentActiveBtn = this.state.activeBtn;
        
        if(!currentActiveBtn) {
            return true;
        }

        return newActiveBtn.query !== currentActiveBtn.query
    }

    render() {
        return (
            <React.Fragment>
                <div className="tab-header">
                    <TabControl buttons={this.props.buttons} onClick={this.getArticles}></TabControl>
                </div>
                <div className="tab-body">
                    {this.state.loading 
                        ? <Loader></Loader> 
                        : <Articles articles={this.state.articles}></Articles>}
                </div>
            </React.Fragment>
        )
    }
}

export default Tab;