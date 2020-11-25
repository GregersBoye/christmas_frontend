import React, { useState} from "react";
import {ListItemIcon, ListItemSecondaryAction, ListItemText, Switch} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import PinModel from "../models/pinModel";

const PinItem = ({pin, onChange}: { pin: PinModel, onChange: Function }) => {
    const [high, setHigh] = useState(pin.HIGH);

    const pinText :string = `Pin #${pin.pinNumberString()}: ${pin.name}`;

    const toggleChecked = () => {
        pin.HIGH = !pin.HIGH;
        setHigh(pin.HIGH);
        onChange(pin);
    }

    return <ListItem>
        <ListItemIcon>

        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary={pinText} />
        <ListItemSecondaryAction>
            <Switch
                edge="end"
                onChange={toggleChecked}
                checked={high}
                inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
            />
        </ListItemSecondaryAction>
    </ListItem>
};

export default PinItem;
