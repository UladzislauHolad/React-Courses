import React, { FC } from 'react';
import { TextField } from '@material-ui/core';

const SearchInput: FC = (props: any) => {
    return <TextField
        value={props.searchTerm}
        margin="normal"
        label="Search"
        fullWidth
    />
}

const mapStateToProps = () => {

}

export default SearchInput;