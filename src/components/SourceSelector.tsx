import React, { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { ISource } from '../interfaces/ISource';
import { connect } from 'react-redux';
import { changeSource, loadArticles } from '../actions';

interface IState { sourceId: string }
interface IStateProps { sourceId:string }
interface IDispatchProps { 
    changeSource: (sourceId: string) => void;
    loadArticles: (sourceId: string) => void;
}
interface IOwnProps { sources: ISource[] }

type IProps = IStateProps & IDispatchProps & IOwnProps;

const Filter: FC<IProps> = (props) => {
    const { sources, sourceId, changeSource, loadArticles } = props;

    const handleChange = (event: React.ChangeEvent<{}>) => {
        const sourceId = (event.target as HTMLInputElement).value;

        changeSource(sourceId);
        loadArticles(sourceId);
    }

    return <FormControl margin="normal" fullWidth>
        <InputLabel htmlFor="source">Source</InputLabel>
        <Select
            value={sourceId}
            onChange={handleChange}
            inputProps={{
                name: "Source",
                id: "source",
            }}
        >
            {sources.map((source) => {
                return <MenuItem key={source.id} value={source.id}>
                    {source.name}
                </MenuItem>
            })}
        </Select>
    </FormControl>
}

const mapStateToProps = (state: IState): IStateProps => {
    return {
        sourceId: state.sourceId
    }
}

const mapDispatchToProps: IDispatchProps = { 
    changeSource,
    loadArticles: loadArticles
};

export default connect<IStateProps, IDispatchProps, IOwnProps, IState>(
    mapStateToProps,
    mapDispatchToProps
)(Filter);