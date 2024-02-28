class SensorHelper {
    constructor() {
        this.ds = {
            'L4P1': 'L4P1',
            'L2F2': 'L2F2',
            "L0_Q1_F1": "L0_Q1_F1",
            "L0_Q1_F2": "L0_Q1_F2",
            "L0_Q1_F4": 'L0_Q1_F4',
            "L2T1": 'L2T1',
            "L2F3": "L2F3",
            "L2f2": "L2f2",
            "L0_Q1_COND": "L0_Q1_COND",
        };

        this.pressureTicks = this.generateTicks(1, 2);
        this.temperatureTicks = this.generateTicks(2, 28, 10);
        this.pressureSubArcs = this.pressure_SubArcs();
        this.temperatureSubArcs = this.generate_SubArcs(30);
    }
    generateTicks = (minValue, maxValue, factor = 9) => {
        // Calculate the interval between ticks
        const tickInterval = (maxValue - minValue) / factor;

        // Generate an array of 10 ticks from 1 to 3
        const customTicks = Array.from({ length: 10 }, (_, index) => ({
            value: parseFloat((minValue + index * tickInterval).toFixed(2)), // Convert to number with two decimal places
        }));
        return customTicks.splice(1, customTicks.length - 1);
    };
    generate_SubArcs = (maxValue) => {
        const subArcsInterval = maxValue / 4;
        const subArcs = [
            {
                limit: 0,
                color: '#EA4228',
                showTick: true,
                tooltip: {
                    text: 'Too low value!'
                },
            },
            {
                limit: 0,
                color: '#F5CD19',
                showTick: true,
                tooltip: {
                    text: 'Low value!'
                }
            },
            {
                limit: 0,
                color: '#F5CD19',
                showTick: true,
                tooltip: {
                    text: 'Low value!'
                }
            },
            {
                limit: 0,
                color: '#5BE12C',
                showTick: true,
                tooltip: {
                    text: 'OK value!'
                }
            },
        ];
        // Update the 'limit' property for each subarc
        subArcs.forEach((subarc, index) => {
            subarc.limit = (index + 1) * subArcsInterval;
        });

        return subArcs;

    };
    pressure_SubArcs = () => {
        const subArcs = [
            {
                limit: 1.22,
                color: '#EA4228',
                showTick: true,
                tooltip: {
                    text: 'Too low value!'
                },
            },
            {
                limit: 1.5,
                color: '#F5CD19',
                showTick: true,
                tooltip: {
                    text: 'Low value!'
                }
            },
            {
                limit: 1.78,
                color: '#F5CD19',
                showTick: true,
                tooltip: {
                    text: 'Low value!'
                }
            },
            {
                limit: 2,
                color: '#5BE12C',
                showTick: true,
                tooltip: {
                    text: 'OK value!'
                }
            },
        ];
        return subArcs;
    };

    temperature_SubArcs = () => {

        const subArcs = [
            {
                limit: 7.5,
                color: '#EA4228',
                showTick: true,
                tooltip: {
                    text: 'Too low value!'
                },
            },
            {
                limit: 15,
                color: '#F5CD19',
                showTick: true,
                tooltip: {
                    text: 'Low value!'
                }
            },
            {
                limit: 22.5,
                color: '#F5CD19',
                showTick: true,
                tooltip: {
                    text: 'Low value!'
                }
            },
            {
                limit: 30,
                color: '#5BE12C',
                showTick: true,
                tooltip: {
                    text: 'OK value!'
                }
            },
        ];
        return subArcs;
    };

    generate_SubarcsV2 = (minValue, maxValue, numSubArcs = 4) => {
        const subArcs = [];
        const subArcStep = (maxValue - minValue) / numSubArcs;
        const colorArr = ['#EA4228', '#F5CD19', '#F5CD19', '#5BE12C'];
        for (let i = 1; i <= numSubArcs; i++) {
            const limit = minValue + i * subArcStep;
            const color = colorArr[i - 1];
            const tooltipText = `SubArc ${i}`;
            subArcs.push({
                limit,
                color,
                tooltip: { text: tooltipText },
            });
        }
        return subArcs;
    };

    generateTicsV2 = (minValue, maxValue, numSubArcs = 4) => {
        const ticks = [];
        const subArcStep = (maxValue - minValue) / numSubArcs;
        for (let i = 1; i <= numSubArcs; i++) {
            const limit = minValue + i * subArcStep;
            ticks.push({ value: limit });
        }
        return ticks;
    };

}
const sensorHelper = new SensorHelper();
export { sensorHelper }

