// frontend/src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const fetchEvents = () => api.get('/events');
export const createEvent = (event) => api.post('/events', event);
export const updateEvent = (id, event) => api.put(`/events/${id}`, event);
export const deleteEvent = (id) => api.delete(`/events/${id}`);
