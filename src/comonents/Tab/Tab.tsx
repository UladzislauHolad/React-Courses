import React from 'react';
import Articles from '../Articles';
import TabControl from './TabControl';
import * as ArticleService from '../../services/articlesService';
import Loader from '../Loader';
import { IButton } from '../../models/IButton';
import { IArticle } from '../../models/IArticle';


interface ITabState {
  articles: IArticle[],
  loading: boolean,
  activeBtn?: IButton
}

interface ITabProps {
  buttons: IButton[]
}

class Tab extends React.Component<ITabProps, ITabState> {
  public state: ITabState = {
    articles: [],
    loading: false,
  }

  public componentDidMount() {
    const query = this.props.buttons[0].query;

    this.getArticles(query)();
  }

  private getArticles = (query: string) => () => {
    this.setState({
      loading: true
    });
    this.changeActiveBtnState(query)
    ArticleService.getArticles(query).then(data => {
      this.setState({
        articles: data.articles as IArticle[],
        loading: false
      });
    });
  }

  private changeActiveBtnState(query: string) {
    const newActiveBtn = this.props.buttons.find(x => x.query === query);

    if (newActiveBtn && this.isActiveBtnChanged(newActiveBtn)) {
      this.deactiveCurrent();

      newActiveBtn.isActive = true;
      this.setState({
        activeBtn: newActiveBtn
      });
    }
  }

  private deactiveCurrent() {
    const activeBtn = this.state.activeBtn;
    if (activeBtn) {
      const currentActiveBtn = this.props.buttons.find(x =>
        x.query === activeBtn.query);

      if (currentActiveBtn) {
        currentActiveBtn.isActive = false;
      }
    }
  }

  private isActiveBtnChanged(newActiveBtn: IButton) {
    const currentActiveBtn = this.state.activeBtn;

    if (!currentActiveBtn) {
      return true;
    }

    return newActiveBtn.query !== currentActiveBtn.query
  }

  public render() {
    return (
      <React.Fragment>
        <div className="tab-header">
          <TabControl buttons={this.props.buttons} onClickHandler={this.getArticles}></TabControl>
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