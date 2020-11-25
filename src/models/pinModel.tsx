class PinModel{
    HIGH: boolean;
    pinNumber: number;
    name: string;

    constructor({HIGH, pinNo, name}: {HIGH: string; pinNo: number, name: string}) {
        this.HIGH = HIGH === "True";
        this.pinNumber = pinNo;
        this.name = name;
    }

    pinNumberString(): string{
        return this.pinNumber < 10 ? `00${this.pinNumber}` : `0${this.pinNumber.toString()}`;
    }
}

export default PinModel;
