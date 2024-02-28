import { createSlice } from '@reduxjs/toolkit';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import WaterIcon from '@mui/icons-material/Water';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SpeedIcon from '@mui/icons-material/Speed';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';
import PercentIcon from '@mui/icons-material/Percent';
import DirtyLensIcon from '@mui/icons-material/DirtyLens';

export const dataSlice = createSlice({
    name: 'auth',
    initialState: {
        value: 'Pressure',
        mp: {
            "Pressure": 'bar',
            "Temperature": '°C',
            'LinearDensity': 'l/min',
            'FlowRate': 'kg/min',
            'ElectricalConductivity': 'µS/cm',
            'Speed': 'm/s',
            'pH': 'pH',
            "%": "%",
            "NTU": "NTU",
            "mV": "mV"
        },
    },
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setValue } = dataSlice.actions;