import React, {useEffect, useState} from "react";
import PinItem from "./pinItem";

const PinTable = (props: any) => {


    return (
        <table>
            <thead>
            <tr>
                <th>Pin#</th>
                <th>State</th>
            </tr>
            </thead>
            <tbody>
            {props.pins.map((pin: any) =>
                <PinItem state={pin.HIGH} pinNo={pin.pinNo} key={pin.pinNo}/>
            )}


            </tbody>
        </table>


    );

}

export default PinTable;
