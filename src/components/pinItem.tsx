import React, {useState} from "react";
import {ListItemIcon, ListItemSecondaryAction, ListItemText, Switch} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import PinModel from "../models/pinModel";

const PinItem = ({pin}: { pin: PinModel }) => {
    const [checked, setChecked] = useState<boolean>(pin.HIGH);
    const pinText :string = `Pin #${pin.pinNumber}: ${pin.name}`;

    const toggleChecked = () => {
        setChecked((oldState:boolean) => !oldState )
    }

    return <ListItem>
        <ListItemIcon>

        </ListItemIcon>
        <ListItemText id="switch-list-label-wifi" primary={pinText} />
        <ListItemSecondaryAction>
            <Switch
                edge="end"
                onChange={toggleChecked}
                checked={checked}
                inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
            />
        </ListItemSecondaryAction>
    </ListItem>
};

export default PinItem;
