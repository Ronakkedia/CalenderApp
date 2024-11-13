// src/components/Calendar.js
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EventFormModal from './EventFormModal';
import { fetchEvents } from '../api';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchEvents().then((response) => setEvents(response.data));
    }, []);

    const handleSelectSlot = (slotInfo) => {
        setSelectedDate(slotInfo.start);
        setIsModalOpen(true);
    };

    const handleEventSubmit = (newEvent) => {
        setEvents((prevEvents) => [...prevEvents, newEvent]);
        setIsModalOpen(false);
    };
    const eventPropGetter = (event) => {
        return {
            style: {
                backgroundColor: 'lightblue',
                color: 'black',
            },
        };
    };

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                selectable
                onSelectSlot={handleSelectSlot}
                eventPropGetter={eventPropGetter}
            />
            {isModalOpen && (
                <EventFormModal
                    selectedDate={selectedDate}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleEventSubmit}
                />
            )}
        </div>
    );
};


export default CalendarComponent;
