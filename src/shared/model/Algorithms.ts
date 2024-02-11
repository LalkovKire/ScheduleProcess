export interface Algorithm {
    name: string;
    tag: string;
}

export interface Process {
    name: string
    executionTime: number;
    arrivalTime: number;
    waitingTime: number;
    timeInSystem: number;
}