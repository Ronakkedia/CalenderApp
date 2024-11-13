import { Injectable } from '@nestjs/common';
import { Event } from './event.model'; // Or wherever it is defined
@Injectable()
export class EventsService {
    private events: Event[] = [];
    private idCounter = 1;

    // Create an event
    create(event: Omit<Event, 'id'>): Event {
        const newEvent = { ...event, id: this.idCounter++ };
        this.events.push(newEvent);
        return newEvent;
    }

    // Read all events
    findAll(): Event[] {
        return this.events;
    }

    // Read an event by ID
    findOne(id: number): Event | undefined {
        return this.events.find((event) => event.id === id);
    }

    // Update an event by ID
    update(id: number, updatedEvent: Partial<Omit<Event, 'id'>>): Event | undefined {
        const eventIndex = this.events.findIndex((event) => event.id === id);
        if (eventIndex === -1) return undefined;

        this.events[eventIndex] = { ...this.events[eventIndex], ...updatedEvent };
        return this.events[eventIndex];
    }

    // Delete an event by ID
    remove(id: number): boolean {
        const initialLength = this.events.length;
        this.events = this.events.filter((event) => event.id !== id);
        return this.events.length < initialLength;
    }
}
