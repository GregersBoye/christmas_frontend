import React, {useEffect, useRef, useState} from "react";
import PinItem from "./pinItem";
import {List, ListSubheader} from "@material-ui/core";
import PinModel from "../models/pinModel";

const PinList = () => {
    const pinContainer = useRef([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);

            const states = await fetch('http://raspberrypi.local:1224/state')
            const {stateList, mode} = await states.json();

            pinContainer.current = stateList.map((dataPoint: { HIGH: string; pinNo: number, name: string }) => new PinModel(dataPoint));
            setLoading(false);
        };

        loadData();
    }, [])

    const updatePin = (pin: PinModel) => {

        const foundPin: any = pinContainer.current.find((currentPin: PinModel) => {
            return currentPin.pinNumber === pin.pinNumber
        });

        if(foundPin !== undefined) {
            foundPin.HIGH = pin.HIGH;
        }

        const pinValue: number = calculatePinValue();

        fetch('http://raspberrypi.local:1224/setlights/'+pinValue);

    }

    const calculatePinValue = () => {
        return pinContainer.current.reduce((oldValue, currentPin:PinModel, index):any => {
            if(currentPin.HIGH)
                return oldValue + Math.pow(2, index);

            return oldValue;
        },0)
    }

    return (
        <List subheader={<ListSubheader>Settings</ListSubheader>} className={"test"}>
            {
                pinContainer.current
                    .map((pin: PinModel, index: number) => {
                        return <PinItem pin={pin} key={pin.pinNumber} onChange={updatePin}/>
                    })
            }
        </List>
    );
}

export default PinList;
