class Helper {
    constructor() {

    }
    getTwoDecimalPlaces = (value) => {
        return Math.round(value * 100) / 100;
    };
    roundToDecimalPlaces = (value, decimalPlaces) => {
        const multiplier = Math.pow(10, decimalPlaces);
        return Math.round(value * multiplier) / multiplier;
    };
}

const helpercl = new Helper();
export { helpercl };