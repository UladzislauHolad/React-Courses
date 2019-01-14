import React, { FC } from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, FormLabel } from '@material-ui/core';
import { SortDirections } from '../enums/sortDirections';
import { changeSortDirection } from '../actions';
import { connect } from 'react-redux';

interface IDispatchProps {
    changeSortDirection: (direction: SortDirections) => void
}
interface IOwnProps { direction: SortDirections }

type IProps = IOwnProps & IDispatchProps;

const SortSelector: FC<IProps> = (props) => {
    const { direction } = props;

    const handleChange = (event: React.ChangeEvent<{}>) => {
        const value: string = (event.target as HTMLInputElement).value;
        
        props.changeSortDirection(value as SortDirections);
    }
    return <FormControl margin="normal">
        <FormLabel >Sort</FormLabel>
        <RadioGroup
            aria-label="Sort"
            name="sort"
            onChange={handleChange}
            value={direction}
            row
        >
            <FormControlLabel
                label={SortDirections.ASC}
                value={SortDirections.ASC}
                control={<Radio />}
            />
            <FormControlLabel
                label={SortDirections.DESC}
                value={SortDirections.DESC}
                control={<Radio />}
            />
        </RadioGroup>
    </FormControl>
}

const mapDispatchToProps: IDispatchProps = { changeSortDirection };

export default connect<{}, IDispatchProps>(
    null,
    mapDispatchToProps
)(SortSelector);