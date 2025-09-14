
"use client";
import { getLabel } from "../../../langhandler";
import { sysStore } from '@/stores/sys';

export const TemperaturesMessages = ({ temperature }: { temperature: number }) => {
    const { language } = sysStore();
    let message = '';
    if (temperature < 10) {
        message = getLabel('cold-text', language);
    } else if (temperature < 25) {
        message = getLabel('mild-text', language);
    } else {
        message = getLabel('hot-text', language);
    }
    return <span>{message}</span>;
};