export interface Task {
    title: string;
    description:string;
    status:TaskStatus;
    id:number;
}

export enum TaskStatus {
    NotStarted,
    InProgress,
    Done
}