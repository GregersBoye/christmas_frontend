import React, {useState} from "react";
import PinItem from "./pinItem";
import {List, ListSubheader} from "@material-ui/core";

const PinList = (props: any) => {

    return (
        <List subheader={<ListSubheader>Settings</ListSubheader>} className={"test"}>
            {
                props.pins.map((pin: any) => {
                    return <PinItem pin={pin} key={pin.pinNo}/>
                })
            }

        </List>

    );

}

export default PinList;
