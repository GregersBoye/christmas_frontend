import PinModel from "./pinModel";

class PinContainer{
    public pins: PinModel[] = [];
    constructor(pins: PinModel[]){
        this.pins = pins;
    }

    updatePin(changedPin: PinModel) {
        const pin = this.pins.find(currentPin =>  currentPin.pinNumber === changedPin.pinNumber);

        if(pin !== undefined){
            pin.HIGH = changedPin.HIGH;
        }

    }
}

export default PinContainer;
