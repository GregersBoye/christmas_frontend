class PinModel{
    HIGH: boolean;
    pinNumber: number;

    constructor({HIGH, pinNo}: {HIGH: string; pinNo: number}) {
        this.HIGH = HIGH === "True";
        this.pinNumber = pinNo;
    }
}

export default PinModel;
