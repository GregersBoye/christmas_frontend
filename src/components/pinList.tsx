import React from "react";
import PinItem from "./pinItem";
import {List, ListSubheader} from "@material-ui/core";
import PinModel from "../models/pinModel";

const PinList = (props: any) => {
    return (
        <List subheader={<ListSubheader>Settings</ListSubheader>} className={"test"}>
            {
                props.pins
                    .filter((pin:PinModel) => pin.name.length > 0)
                    .map((pin: PinModel) => {
                    return <PinItem pin={pin} key={pin.pinNumber}/>
                })
            }
        </List>
    );
}

export default PinList;
