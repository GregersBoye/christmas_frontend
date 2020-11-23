class PinModel{
    HIGH: boolean;
    pinNumber: number;
    name: string;

    constructor({HIGH, pinNo, name}: {HIGH: string; pinNo: number, name: string}) {
        this.HIGH = HIGH === "True";
        this.pinNumber = pinNo;
        this.name = name;
    }
}

export default PinModel;
