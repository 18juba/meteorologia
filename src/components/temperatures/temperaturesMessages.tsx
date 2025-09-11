"use client";

import { getLabel } from "../../../langhandler";

export const TemperaturesMessages = ({ temperature }: { temperature: number }) => {
    
    let message = '';
    if (temperature < 10) {
        message = getLabel('cold-text');
    } else if (temperature < 25) {
        message = getLabel('mild-text');
    } else {
        message = getLabel('hot-text');
    }
    console.log("Temperature message:", message);
    return <span>{message}</span>;
}