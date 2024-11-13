// src/events/event.model.ts

export interface Event {
    id: number;
    title: string;
    date: Date;
    description?: string;  // Optional field for a description
}
