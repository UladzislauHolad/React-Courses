import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import { changeSearchTerm } from '../actions';
import { connect } from 'react-redux';

interface IState {
    searchTerm: string
}
interface IStateProps {
    searchTerm: string
}
interface IDispatchProps {
    changeSearchTerm: (searchTerm: string) => void
}

type IProps = IStateProps & IDispatchProps;

const SearchInput: FC<IProps> = (props) => {
    const { searchTerm, changeSearchTerm } = props;

    const handleSearch = (event: React.ChangeEvent<{}>) => {
        const searchTerm = (event.target as HTMLInputElement).value;
        changeSearchTerm(searchTerm);
    }

    return <TextField
        value={searchTerm}
        onChange={handleSearch}
        margin="normal"
        label="Search"
        fullWidth
    />
}

const mapStateToProps = ({ searchTerm }: IState): IStateProps => ({
    searchTerm
});

const mapDispatchToProps: IDispatchProps = { changeSearchTerm };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInput);