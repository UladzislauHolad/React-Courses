import React, { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const Filter: FC = () => {
    return <FormControl margin="normal" fullWidth>
        <InputLabel htmlFor="source">Source</InputLabel>
        <Select
            value={''}
            inputProps={{
                name: "Source",
                id: "source",
            }}
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>
}

export default Filter;