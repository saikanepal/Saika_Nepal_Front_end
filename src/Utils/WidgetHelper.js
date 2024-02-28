
class WidgetInterface {
    constructor() {
        if (this.constructor === WidgetInterface) {
            throw new Error('Cannot instantiate an abstract class.');
        }
    }
    formatTextValue = (value) => {
        throw new Error('Subclasses must implement calculateArea method.');
    };
}

class WidgetHelper extends WidgetInterface {
    constructor() {
        super();
        this.unit = {
            pressure: ' psi ',
            temperature: "ºC",
        };

    }
    formatTextValue = (value, unit) => {
        return value + unit;
    };
    rangeMeter = (value, unit) => {
        return value + unit;
    };

}


const widgethelper = new WidgetHelper();
export { widgethelper };