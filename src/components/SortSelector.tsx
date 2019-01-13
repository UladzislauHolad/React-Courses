import React, { FC } from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, FormLabel } from '@material-ui/core';
import { SortDirections } from '../enums/sortDirections';
import { changeSortDirection } from '../actions';
import { connect } from 'react-redux';

interface IState { direction: SortDirections }
interface IStateProps { direction: SortDirections }
interface IDispatchProps {
    changeSortDirection: (direction: SortDirections) => void
}

type IProps = IStateProps & IDispatchProps;


const SortSelector: FC<IProps> = (props) => {
    const { direction } = props;

    const handleChange = (event: React.ChangeEvent<{}>) => {
        const value: string = (event.target as HTMLInputElement).value;
        debugger
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

const mapStateToProps = ({ direction }: IState): IStateProps => {
    debugger
    return {
        direction
    }
}

const mapDispatchToProps = { changeSortDirection };

export default connect<IStateProps, IDispatchProps, {}, IState>(
    mapStateToProps,
    mapDispatchToProps
)(SortSelector);